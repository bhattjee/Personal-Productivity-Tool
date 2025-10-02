import { Moon, Sun, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Bedtime = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bedtime Scheduler</h1>
          <p className="text-muted-foreground mt-1">Optimize your sleep schedule</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sleep Goal</CardTitle>
            <Moon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 hours</div>
            <p className="text-xs text-muted-foreground">Target per night</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Sleep</CardTitle>
            <Sun className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2 hrs</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consistency</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Sleep score</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Tonight's Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <p className="font-semibold">Recommended Bedtime</p>
              <p className="text-sm text-muted-foreground">Based on 8-hour goal</p>
            </div>
            <div className="text-2xl font-bold text-primary">10:30 PM</div>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <p className="font-semibold">Wake-up Time</p>
              <p className="text-sm text-muted-foreground">Your alarm</p>
            </div>
            <div className="text-2xl font-bold">6:30 AM</div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Sleep Debt</span>
              <span className="text-sm font-medium">-2.4 hours this week</span>
            </div>
            <Progress value={70} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Wind-Down Routine</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">9:30 PM</span>
              <span>Start evening routine</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">10:00 PM</span>
              <span>No screens - reading time</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">10:30 PM</span>
              <span>Lights out</span>
            </div>
          </div>
          <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
            Activate Do Not Disturb
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bedtime;
