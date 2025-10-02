import { Plus, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JournalEntry {
  id: string;
  date: string;
  mood: string;
  title: string;
  preview: string;
  tags: string[];
}

const Journal = () => {
  const entries: JournalEntry[] = [
    {
      id: "1",
      date: "Today, 8:30 AM",
      mood: "😊",
      title: "Great Morning Workout",
      preview: "Started the day with an amazing workout session. Feeling energized and ready to tackle the day...",
      tags: ["fitness", "morning"],
    },
    {
      id: "2",
      date: "Yesterday",
      mood: "🤔",
      title: "Reflection on Goals",
      preview: "Been thinking about my long-term goals and how to align my daily habits with them...",
      tags: ["goals", "reflection"],
    },
    {
      id: "3",
      date: "Dec 28, 2024",
      mood: "🎉",
      title: "Year End Review",
      preview: "Looking back at 2024, it's been quite a journey. So many lessons learned and growth achieved...",
      tags: ["reflection", "gratitude"],
    },
  ];

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

      <div className="flex gap-3">
        <Input placeholder="Search entries..." className="max-w-sm" />
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Calendar
        </Button>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{entry.mood}</span>
                  <div>
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                </div>
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
      </div>
    </div>
  );
};

export default Journal;
