import { useState } from "react";
import { Flame, Target, TrendingUp, Snowflake, StickyNote, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Habit {
  id: string;
  name: string;
  emoji: string;
  streak: number;
  completedToday: boolean;
  category: string;
  bestStreak: number;
  freezeDays: number;
  notes?: string;
  completionRate: number;
  checkInHistory: string[];
}

const Habits = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { 
      id: "1", 
      name: "Morning Meditation", 
      emoji: "🧘", 
      streak: 12, 
      completedToday: true, 
      category: "Mindfulness", 
      bestStreak: 18,
      freezeDays: 2,
      notes: "Focus on breathing and clearing mind",
      completionRate: 85,
      checkInHistory: ["2025-10-02", "2025-10-01", "2025-09-30"]
    },
    { 
      id: "2", 
      name: "Read 30 mins", 
      emoji: "📚", 
      streak: 7, 
      completedToday: false, 
      category: "Personal Growth", 
      bestStreak: 15,
      freezeDays: 1,
      completionRate: 73,
      checkInHistory: ["2025-10-01", "2025-09-30", "2025-09-29"]
    },
    { 
      id: "3", 
      name: "Drink 8 glasses of water", 
      emoji: "💧", 
      streak: 5, 
      completedToday: true, 
      category: "Health", 
      bestStreak: 10,
      freezeDays: 3,
      notes: "Track throughout the day",
      completionRate: 92,
      checkInHistory: ["2025-10-02", "2025-10-01", "2025-09-30"]
    },
    { 
      id: "4", 
      name: "Exercise", 
      emoji: "💪", 
      streak: 15, 
      completedToday: false, 
      category: "Fitness", 
      bestStreak: 20,
      freezeDays: 1,
      completionRate: 88,
      checkInHistory: ["2025-10-01", "2025-09-30", "2025-09-29"]
    },
  ]);

  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completedToday: !habit.completedToday } : habit
    ));
  };

  const updateNotes = (id: string, notes: string) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, notes } : habit
    ));
  };

  const totalCompletionRate = Math.round(habits.reduce((acc, h) => acc + h.completionRate, 0) / habits.length);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Habit Tracker</h1>
          <p className="text-muted-foreground mt-1">Build better habits, one day at a time</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Target className="h-4 w-4 mr-2" />
          New Habit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Habits</CardTitle>
            <Target className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{habits.length}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
            <Flame className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20 days</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCompletionRate}%</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Freeze Credits</CardTitle>
            <Snowflake className="h-5 w-5 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{habits.reduce((acc, h) => acc + h.freezeDays, 0)}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => (
          <Card key={habit.id} className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{habit.emoji}</span>
                  <div>
                    <h3 className="font-semibold">{habit.name}</h3>
                    <p className="text-sm text-muted-foreground">{habit.category}</p>
                  </div>
                </div>
                <Button 
                  variant={habit.completedToday ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleHabit(habit.id)}
                  className={habit.completedToday ? "bg-success text-success-foreground hover:bg-success/90" : ""}
                >
                  {habit.completedToday ? "✓ Done" : "Check In"}
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Current Streak</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Flame className="h-4 w-4 text-warning" />
                    {habit.streak} days
                  </span>
                </div>
                <Progress value={(habit.streak / habit.bestStreak) * 100} className="h-2" />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Best: {habit.bestStreak} days</span>
                  <span className="text-muted-foreground">{habit.completionRate}% rate</span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Snowflake className="h-3 w-3" />
                    <span>{habit.freezeDays} freeze days</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{habit.checkInHistory.length} check-ins</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => setSelectedHabit(habit)}
                    >
                      <StickyNote className="h-4 w-4 mr-2" />
                      {habit.notes ? "View Notes" : "Add Notes"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <span className="mr-2">{habit.emoji}</span>
                        {habit.name} - Notes
                      </DialogTitle>
                    </DialogHeader>
                    <Textarea
                      placeholder="Add reflections about this habit..."
                      value={habit.notes || ""}
                      onChange={(e) => updateNotes(habit.id, e.target.value)}
                      className="min-h-[120px]"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Habits;
