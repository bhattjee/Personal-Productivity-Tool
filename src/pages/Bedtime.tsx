import { useState } from "react";
import { Moon, Sun, TrendingUp, BellRing, CheckCircle2, Smartphone, Book, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bedtime = () => {
  const [sleepHistory] = useState([
    { date: "Today", duration: "7.2 hrs", quality: "Good", feeling: "😊" },
    { date: "Yesterday", duration: "8.0 hrs", quality: "Excellent", feeling: "😄" },
    { date: "2 days ago", duration: "6.5 hrs", quality: "Fair", feeling: "😐" },
  ]);

  const [windDownRoutine] = useState([
    { time: "9:30 PM", task: "Start evening routine", icon: Coffee, completed: false },
    { time: "10:00 PM", task: "No screens - reading time", icon: Book, completed: false },
    { time: "10:30 PM", task: "Lights out", icon: Moon, completed: false },
  ]);

  const [sleepCycles] = useState({
    recommended: "10:30 PM",
    cycles: ["9:00 PM (6 cycles)", "10:30 PM (5 cycles)", "12:00 AM (4 cycles)"]
  });

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

      <Tabs defaultValue="tonight" className="w-full">
        <TabsList>
          <TabsTrigger value="tonight">Tonight's Plan</TabsTrigger>
          <TabsTrigger value="history">Sleep History</TabsTrigger>
          <TabsTrigger value="cycles">Sleep Cycles</TabsTrigger>
        </TabsList>

        <TabsContent value="tonight" className="space-y-4 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Wind-Down Routine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {windDownRoutine.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      item.completed ? 'bg-success border-success' : 'border-muted-foreground'
                    }`}>
                      {item.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                    </div>
                    <item.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{item.task}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Smartphone className="h-4 w-4 mr-2" />
                Activate Do Not Disturb
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <BellRing className="h-8 w-8 text-warning" />
                <div>
                  <h3 className="font-semibold">Bedtime Reminder</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll remind you 30 minutes before your target bedtime
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-3 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Recent Sleep</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sleepHistory.map((night, idx) => (
                <div key={idx} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">{night.date}</p>
                      <p className="text-sm text-muted-foreground">{night.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl">{night.feeling}</span>
                      <p className="text-sm text-muted-foreground">{night.quality}</p>
                    </div>
                  </div>
                  <Progress 
                    value={night.quality === "Excellent" ? 100 : night.quality === "Good" ? 75 : 50} 
                    className="h-2" 
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cycles" className="space-y-4 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Sleep Cycle Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-card rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Recommended for 6:30 AM wake-up:</p>
                <p className="text-3xl font-bold">{sleepCycles.recommended}</p>
                <p className="text-sm text-muted-foreground mt-2">5 complete sleep cycles (90 min each)</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Other Options:</p>
                {sleepCycles.cycles.map((cycle, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span>{cycle}</span>
                    <Badge variant="outline">
                      {idx === 1 ? "Recommended" : "Alternative"}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 Sleep cycles last about 90 minutes. Waking between cycles helps you feel more refreshed.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Bedtime;
