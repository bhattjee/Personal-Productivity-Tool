import { Target, CheckSquare, Flame, Trophy, TrendingUp, Zap, Award, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const stats = [
    { title: "Active Streaks", value: "5", icon: Flame, color: "text-warning", change: "+2" },
    { title: "Tasks Today", value: "8/12", icon: CheckSquare, color: "text-accent", change: "67%" },
    { title: "Habits", value: "4/6", icon: Target, color: "text-primary", change: "On track" },
    { title: "Achievements", value: "23", icon: Trophy, color: "text-success", change: "+3 new" },
  ];

  const insights = [
    { 
      title: "Most Productive Time", 
      value: "Morning (6-10 AM)", 
      icon: TrendingUp,
      description: "You complete 65% of tasks during morning hours"
    },
    { 
      title: "Sleep & Performance", 
      value: "Strong Correlation", 
      icon: Zap,
      description: "7+ hours of sleep leads to 40% better workout performance"
    },
    { 
      title: "Weekly Pattern", 
      value: "Tuesday Peak", 
      icon: Star,
      description: "You're most consistent on Tuesdays with 95% habit completion"
    },
  ];

  const achievements = [
    { title: "7-Day Streak Master", emoji: "🔥", description: "Maintain 3 habits for 7 days" },
    { title: "Early Bird", emoji: "🌅", description: "Wake up before 7 AM for 5 days" },
    { title: "Consistency King", emoji: "👑", description: "Complete 100 tasks" },
  ];

  const weeklyChallenge = {
    title: "Morning Routine Challenge",
    description: "Complete your morning routine 5 days this week",
    progress: 3,
    target: 5,
    reward: "50 XP + Special Badge"
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-hero rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
        <p className="text-lg opacity-90">Let's make today count</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-hero border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5" />
                <Badge variant="secondary">Weekly Challenge</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">{weeklyChallenge.title}</h3>
              <p className="opacity-90 mb-4">{weeklyChallenge.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-semibold">{weeklyChallenge.progress}/{weeklyChallenge.target} days</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all" 
                    style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.target) * 100}%` }}
                  />
                </div>
                <p className="text-xs opacity-75">🎁 Reward: {weeklyChallenge.reward}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="progress" className="w-full">
        <TabsList>
          <TabsTrigger value="progress">Today's Progress</TabsTrigger>
          <TabsTrigger value="insights">Smart Insights</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Daily Goals</span>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Habits</span>
                  <span className="text-sm font-medium">4/6 completed</span>
                </div>
                <Progress value={66} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Tasks</span>
                  <span className="text-sm font-medium">8/12 completed</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Workouts</span>
                  <span className="text-sm font-medium">3/4 this week</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Quote of the Day</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-lg mb-4">
                "The only way to do great work is to love what you do."
              </blockquote>
              <p className="text-sm text-muted-foreground mb-4">— Steve Jobs</p>
              <Badge variant="secondary">Success</Badge>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-warning" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, idx) => (
                <div key={idx} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-start gap-3">
                    <insight.icon className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-lg font-bold text-primary mb-2">{insight.value}</p>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-warning" />
                <div>
                  <h3 className="font-semibold">Health Score: 87/100</h3>
                  <p className="text-sm text-muted-foreground">
                    Combining sleep, exercise, habits, and consistency metrics
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <span className="text-4xl">{achievement.emoji}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Unlocked
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-hero border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                  12
                </div>
                <div>
                  <h3 className="text-xl font-bold">Level 12 Champion</h3>
                  <p className="opacity-90">2,450 XP • Next level: 3,000 XP</p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default Dashboard;
