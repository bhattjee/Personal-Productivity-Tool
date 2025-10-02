import { useState } from "react";
import { Plus, Search, Calendar, Image, Mic, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface JournalEntry {
  id: string;
  date: string;
  mood: string;
  title: string;
  preview: string;
  content: string;
  tags: string[];
  gratitude?: string[];
  hasPhoto?: boolean;
  hasVoiceNote?: boolean;
  favorite?: boolean;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: "1",
      date: "Today, 8:30 AM",
      mood: "😊",
      title: "Great Morning Workout",
      preview: "Started the day with an amazing workout session. Feeling energized and ready to tackle the day...",
      content: "Started the day with an amazing workout session. Feeling energized and ready to tackle the day. Did 5k run followed by strength training.",
      tags: ["fitness", "morning"],
      gratitude: ["Healthy body", "Beautiful weather", "Good energy"],
      hasPhoto: true,
      favorite: true
    },
    {
      id: "2",
      date: "Yesterday",
      mood: "🤔",
      title: "Reflection on Goals",
      preview: "Been thinking about my long-term goals and how to align my daily habits with them...",
      content: "Been thinking about my long-term goals and how to align my daily habits with them. Need to focus more on consistency.",
      tags: ["goals", "reflection"],
      hasVoiceNote: true
    },
    {
      id: "3",
      date: "Dec 28, 2024",
      mood: "🎉",
      title: "Year End Review",
      preview: "Looking back at 2024, it's been quite a journey. So many lessons learned and growth achieved...",
      content: "Looking back at 2024, it's been quite a journey. So many lessons learned and growth achieved. Proud of all the progress made.",
      tags: ["reflection", "gratitude"],
      gratitude: ["Personal growth", "New friendships", "Career progress"],
      favorite: true
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState<string>("all");
  const [filterMood, setFilterMood] = useState<string>("all");

  const toggleFavorite = (id: string) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, favorite: !entry.favorite } : entry
    ));
  };

  const exportEntry = (entry: JournalEntry) => {
    const text = `${entry.title}\n${entry.date}\n\n${entry.content}\n\nTags: ${entry.tags.join(", ")}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `journal-${entry.id}.txt`;
    a.click();
  };

  const allTags = Array.from(new Set(entries.flatMap(e => e.tags)));

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = filterTag === "all" || entry.tags.includes(filterTag);
    const matchesMood = filterMood === "all" || entry.mood === filterMood;
    return matchesSearch && matchesTag && matchesMood;
  });

  const favoriteEntries = filteredEntries.filter(e => e.favorite);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Daily Journal</h1>
          <p className="text-muted-foreground mt-1">Capture your thoughts and reflections</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Entry
        </Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search entries..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={filterTag} onValueChange={setFilterTag}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {allTags.map(tag => (
              <SelectItem key={tag} value={tag}>{tag}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterMood} onValueChange={setFilterMood}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Mood" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Moods</SelectItem>
            <SelectItem value="😊">😊 Happy</SelectItem>
            <SelectItem value="🤔">🤔 Thoughtful</SelectItem>
            <SelectItem value="🎉">🎉 Excited</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Calendar
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Entries ({filteredEntries.length})</TabsTrigger>
          <TabsTrigger value="favorites">
            <Heart className="h-4 w-4 mr-1" />
            Favorites ({favoriteEntries.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {filteredEntries.map((entry) => (
            <Card key={entry.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{entry.mood}</span>
                    <div>
                      <CardTitle className="text-lg">{entry.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{entry.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(entry.id)}
                    >
                      <Heart className={`h-4 w-4 ${entry.favorite ? 'fill-destructive text-destructive' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => exportEntry(entry)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{entry.preview}</p>
                
                {entry.gratitude && entry.gratitude.length > 0 && (
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-sm font-medium mb-2">Grateful for:</p>
                    <ul className="text-sm space-y-1">
                      {entry.gratitude.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-warning">✨</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center gap-2 flex-wrap">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {entry.hasPhoto && (
                    <Badge variant="outline" className="text-xs">
                      <Image className="h-3 w-3 mr-1" />
                      Photo
                    </Badge>
                  )}
                  {entry.hasVoiceNote && (
                    <Badge variant="outline" className="text-xs">
                      <Mic className="h-3 w-3 mr-1" />
                      Voice
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4 mt-4">
          {favoriteEntries.map((entry) => (
            <Card key={entry.id} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{entry.mood}</span>
                    <div>
                      <CardTitle className="text-lg">{entry.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{entry.date}</p>
                    </div>
                  </div>
                  <Heart className="h-5 w-5 fill-destructive text-destructive" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{entry.preview}</p>
                <div className="flex gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          {favoriteEntries.length === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center text-muted-foreground">
                No favorite entries yet. Click the heart icon to add favorites!
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Journal;
