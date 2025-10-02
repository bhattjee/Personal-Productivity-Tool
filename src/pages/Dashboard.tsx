import { Target, CheckSquare, Flame, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    { title: "Active Streaks", value: "5", icon: Flame, color: "text-warning" },
    { title: "Tasks Today", value: "8/12", icon: CheckSquare, color: "text-accent" },
    { title: "Habits", value: "4/6", icon: Target, color: "text-primary" },
    { title: "Achievements", value: "23", icon: Trophy, color: "text-success" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-hero rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
        <p className="text-lg opacity-90">Let's make today count</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <p className="text-sm text-muted-foreground">— Steve Jobs</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default Dashboard;
