import { useState } from "react";
import { Quote, Heart, Share2, RefreshCw, Search, BookmarkPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuoteData {
  id: string;
  text: string;
  author: string;
  category: string;
  isFavorite: boolean;
  date?: string;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([
    {
      id: "1",
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Success",
      isFavorite: true,
      date: "2025-10-02"
    },
    {
      id: "2",
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "Motivation",
      isFavorite: false,
      date: "2025-10-01"
    },
    {
      id: "3",
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
      category: "Mindfulness",
      isFavorite: true,
      date: "2025-09-30"
    },
    {
      id: "4",
      text: "The body achieves what the mind believes.",
      author: "Jim Kwik",
      category: "Fitness",
      isFavorite: true,
      date: "2025-09-28"
    },
    {
      id: "5",
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      category: "Motivation",
      isFavorite: false,
      date: "2025-09-27"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [quoteOfDay, setQuoteOfDay] = useState(quotes[0]);

  const toggleFavorite = (id: string) => {
    setQuotes(quotes.map(quote =>
      quote.id === id ? { ...quote, isFavorite: !quote.isFavorite } : quote
    ));
  };

  const shareQuote = (quote: QuoteData) => {
    const text = `"${quote.text}" - ${quote.author}`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  const categories = Array.from(new Set(quotes.map(q => q.category)));
  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quote.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || quote.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const favoriteQuotes = filteredQuotes.filter(q => q.isFavorite);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Daily Quotes</h1>
          <p className="text-muted-foreground mt-1">Get inspired every day</p>
        </div>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          New Quote
        </Button>
      </div>

      <Card className="bg-gradient-hero border-0 text-white">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-4">
            <Quote className="h-8 w-8 opacity-60" />
            <Badge variant="secondary" className="text-xs">
              Quote of the Day
            </Badge>
          </div>
          <blockquote className="text-2xl font-semibold mb-4 leading-relaxed">
            "{quoteOfDay.text}"
          </blockquote>
          <p className="text-lg opacity-90 mb-2">— {quoteOfDay.author}</p>
          <Badge variant="secondary" className="mb-6">
            {quoteOfDay.category}
          </Badge>
          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => toggleFavorite(quoteOfDay.id)}
            >
              <Heart className={`h-4 w-4 mr-2 ${quoteOfDay.isFavorite ? 'fill-current' : ''}`} />
              {quoteOfDay.isFavorite ? 'Saved' : 'Save'}
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => shareQuote(quoteOfDay)}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search quotes..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Quotes ({filteredQuotes.length})</TabsTrigger>
          <TabsTrigger value="favorites">
            <Heart className="h-4 w-4 mr-1" />
            Favorites ({favoriteQuotes.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {filteredQuotes.map((quote) => (
            <Card key={quote.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{quote.category}</Badge>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(quote.id)}
                    >
                      <Heart className={`h-4 w-4 ${quote.isFavorite ? 'fill-destructive text-destructive' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => shareQuote(quote)}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <blockquote className="text-lg font-medium mb-2 italic">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">— {quote.author}</p>
                  {quote.date && (
                    <p className="text-xs text-muted-foreground">{quote.date}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4 mt-4">
          {favoriteQuotes.map((quote) => (
            <Card key={quote.id} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{quote.category}</Badge>
                  <Heart className="h-5 w-5 text-destructive fill-destructive" />
                </div>
                <blockquote className="text-lg font-medium mb-2 italic">
                  "{quote.text}"
                </blockquote>
                <p className="text-sm text-muted-foreground">— {quote.author}</p>
              </CardContent>
            </Card>
          ))}
          {favoriteQuotes.length === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center text-muted-foreground">
                <BookmarkPlus className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No favorite quotes yet. Click the heart icon to save your favorites!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Quotes;
