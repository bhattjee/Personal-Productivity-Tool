import { Flame, Calendar, Trophy, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Streaks = () => {
  const streakData = [
    { name: "Morning Meditation", current: 12, best: 18, icon: "🧘", color: "text-primary" },
    { name: "Exercise", current: 15, best: 20, icon: "💪", color: "text-accent" },
    { name: "Journal", current: 7, best: 15, icon: "📝", color: "text-warning" },
    { name: "Reading", current: 5, best: 10, icon: "📚", color: "text-success" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Streak Manager</h1>
        <p className="text-muted-foreground mt-1">Track all your habit streaks in one place</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Streaks</CardTitle>
            <Flame className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
            <Trophy className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20 days</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Freeze Credits</CardTitle>
            <Calendar className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Consistency</CardTitle>
            <Target className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {streakData.map((streak) => (
          <Card key={streak.name} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{streak.icon}</span>
                  <div>
                    <h3 className="font-semibold">{streak.name}</h3>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold flex items-center gap-2 ${streak.color}`}>
                    <Flame className="h-6 w-6" />
                    {streak.current}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                <span className="text-muted-foreground">Best Streak</span>
                <span className="font-semibold">{streak.best} days</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-hero border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Trophy className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-bold">Milestone Achievement!</h3>
              <p className="opacity-90">You've maintained a 7-day streak on 3 habits</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Streaks;
