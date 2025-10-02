import { Flame, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Habit {
  id: string;
  name: string;
  emoji: string;
  streak: number;
  completedToday: boolean;
  category: string;
  bestStreak: number;
}

const Habits = () => {
  const habits: Habit[] = [
    { id: "1", name: "Morning Meditation", emoji: "🧘", streak: 12, completedToday: true, category: "Mindfulness", bestStreak: 18 },
    { id: "2", name: "Read 30 mins", emoji: "📚", streak: 7, completedToday: false, category: "Personal Growth", bestStreak: 15 },
    { id: "3", name: "Drink 8 glasses of water", emoji: "💧", streak: 5, completedToday: true, category: "Health", bestStreak: 10 },
    { id: "4", name: "Exercise", emoji: "💪", streak: 15, completedToday: false, category: "Fitness", bestStreak: 20 },
  ];

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
            <div className="text-2xl font-bold">78%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => (
          <Card key={habit.id} className="bg-card border-border">
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
                  className={habit.completedToday ? "bg-success text-success-foreground" : ""}
                >
                  {habit.completedToday ? "✓ Done" : "Mark Done"}
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Current Streak</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Flame className="h-4 w-4 text-warning" />
                    {habit.streak} days
                  </span>
                </div>
                <Progress value={(habit.streak / habit.bestStreak) * 100} className="h-2" />
                <div className="text-xs text-muted-foreground text-right">
                  Best: {habit.bestStreak} days
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Habits;
