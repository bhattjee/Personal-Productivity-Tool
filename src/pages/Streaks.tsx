import { useState } from "react";
import { Flame, Calendar, Trophy, Target, Award, Snowflake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Streaks = () => {
  const [streakData] = useState([
    { 
      name: "Morning Meditation", 
      current: 12, 
      best: 18, 
      icon: "🧘", 
      color: "text-primary",
      freezeDays: 2,
      lastCompleted: "Today",
      milestone: "7-day milestone reached!"
    },
    { 
      name: "Exercise", 
      current: 15, 
      best: 20, 
      icon: "💪", 
      color: "text-accent",
      freezeDays: 1,
      lastCompleted: "Today",
      milestone: "On fire! 14-day milestone"
    },
    { 
      name: "Journal", 
      current: 7, 
      best: 15, 
      icon: "📝", 
      color: "text-warning",
      freezeDays: 3,
      lastCompleted: "Yesterday",
      milestone: "7-day milestone reached!"
    },
    { 
      name: "Reading", 
      current: 5, 
      best: 10, 
      icon: "📚", 
      color: "text-success",
      freezeDays: 1,
      lastCompleted: "Today",
      milestone: null
    },
  ]);

  const [milestones] = useState([
    { days: 7, reached: 3, emoji: "🎯" },
    { days: 30, reached: 1, emoji: "🌟" },
    { days: 100, reached: 0, emoji: "💎" },
    { days: 365, reached: 0, emoji: "👑" },
  ]);

  const [heatmapData] = useState(() => {
    const days = [];
    for (let i = 30; i >= 0; i--) {
      days.push({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        count: Math.floor(Math.random() * 5)
      });
    }
    return days;
  });

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

      <Tabs defaultValue="streaks" className="w-full">
        <TabsList>
          <TabsTrigger value="streaks">Active Streaks</TabsTrigger>
          <TabsTrigger value="heatmap">Calendar Heatmap</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="streaks" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {streakData.map((streak) => (
            <Card key={streak.name} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{streak.icon}</span>
                    <div>
                      <h3 className="font-semibold">{streak.name}</h3>
                      <p className="text-xs text-muted-foreground">Last: {streak.lastCompleted}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold flex items-center gap-2 ${streak.color}`}>
                      <Flame className="h-6 w-6" />
                      {streak.current}
                    </div>
                  </div>
                </div>

                {streak.milestone && (
                  <div className="mb-3 p-2 bg-gradient-card rounded-lg">
                    <p className="text-sm flex items-center gap-2">
                      <Award className="h-4 w-4 text-warning" />
                      {streak.milestone}
                    </p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm pt-3 border-t border-border">
                    <span className="text-muted-foreground">Best Streak</span>
                    <span className="font-semibold">{streak.best} days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Snowflake className="h-3 w-3" />
                      Freeze Days
                    </span>
                    <Badge variant="outline">{streak.freezeDays} available</Badge>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-hero h-2 rounded-full" 
                      style={{ width: `${(streak.current / streak.best) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="heatmap" className="mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Activity Heatmap - Last 30 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {heatmapData.map((day, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-sm ${
                      day.count === 0 ? 'bg-secondary' :
                      day.count === 1 ? 'bg-success/20' :
                      day.count === 2 ? 'bg-success/40' :
                      day.count === 3 ? 'bg-success/60' :
                      day.count === 4 ? 'bg-success/80' :
                      'bg-success'
                    }`}
                    title={`${day.date}: ${day.count} activities`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-sm bg-secondary" />
                  <div className="w-4 h-4 rounded-sm bg-success/20" />
                  <div className="w-4 h-4 rounded-sm bg-success/40" />
                  <div className="w-4 h-4 rounded-sm bg-success/60" />
                  <div className="w-4 h-4 rounded-sm bg-success" />
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Streak Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{milestone.emoji}</span>
                    <div>
                      <h4 className="font-semibold">{milestone.days}-Day Milestone</h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.reached > 0 
                          ? `Reached ${milestone.reached} time${milestone.reached > 1 ? 's' : ''}!` 
                          : 'Not reached yet'}
                      </p>
                    </div>
                  </div>
                  {milestone.reached > 0 && (
                    <Badge className="bg-success text-success-foreground">
                      <Trophy className="h-3 w-3 mr-1" />
                      {milestone.reached}x
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border mt-4">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Snowflake className="h-8 w-8 text-info" />
                <div>
                  <h3 className="font-semibold">Streak Recovery System</h3>
                  <p className="text-sm text-muted-foreground">
                    Use freeze days to protect your streak when life gets busy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

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
