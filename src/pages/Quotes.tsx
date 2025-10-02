import { Quote, Heart, Share2, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuoteData {
  id: string;
  text: string;
  author: string;
  category: string;
  isFavorite: boolean;
}

const Quotes = () => {
  const quotes: QuoteData[] = [
    {
      id: "1",
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Success",
      isFavorite: true,
    },
    {
      id: "2",
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "Motivation",
      isFavorite: false,
    },
    {
      id: "3",
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
      category: "Mindfulness",
      isFavorite: true,
    },
  ];

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
          <Quote className="h-8 w-8 mb-4 opacity-60" />
          <blockquote className="text-2xl font-semibold mb-4 leading-relaxed">
            "{quotes[0].text}"
          </blockquote>
          <p className="text-lg opacity-90">— {quotes[0].author}</p>
          <div className="flex gap-3 mt-6">
            <Button variant="secondary" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="secondary" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Saved Quotes</h2>
        <div className="space-y-4">
          {quotes.filter(q => q.isFavorite).map((quote) => (
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
        </div>
      </div>

      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Quote className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Quote Categories</h3>
              <p className="text-sm text-muted-foreground">
                Filter by: Fitness, Success, Mindfulness, Motivation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quotes;
