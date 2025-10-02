import { useState } from "react";
import { Play, MapPin, Clock, TrendingUp, Navigation, Mountain, Zap, Heart, Volume2, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Run {
  date: string;
  distance: string;
  time: string;
  pace: string;
  calories?: number;
  elevation?: string;
  splits?: string[];
  weather?: string;
  heartRate?: string;
  route?: string;
}

const Running = () => {
  const [recentRuns] = useState<Run[]>([
    { 
      date: "Today", 
      distance: "5.2 km", 
      time: "28:15", 
      pace: "5:26 /km",
      calories: 420,
      elevation: "+45m",
      splits: ["5:30", "5:25", "5:20", "5:28", "5:24"],
      weather: "Clear, 18°C",
      heartRate: "152 bpm avg",
      route: "Morning Loop"
    },
    { 
      date: "2 days ago", 
      distance: "10.0 km", 
      time: "56:30", 
      pace: "5:39 /km",
      calories: 820,
      elevation: "+120m",
      splits: ["5:40", "5:38", "5:35", "5:42", "5:39", "5:37", "5:41", "5:38", "5:40", "5:36"],
      weather: "Partly cloudy, 16°C",
      heartRate: "158 bpm avg",
      route: "River Trail"
    },
    { 
      date: "5 days ago", 
      distance: "3.5 km", 
      time: "18:45", 
      pace: "5:21 /km",
      calories: 285,
      elevation: "+20m",
      splits: ["5:25", "5:20", "5:18"],
      weather: "Sunny, 20°C",
      heartRate: "145 bpm avg",
      route: "Park Circuit"
    },
  ]);

  const [runningStreak] = useState(12);
  const [monthlyGoal] = useState({ current: 142, target: 200 });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Running Tracker</h1>
          <p className="text-muted-foreground mt-1">Track your runs and improve your pace</p>
        </div>
        <Button className="bg-success text-success-foreground hover:bg-success/90">
          <Play className="h-4 w-4 mr-2" />
          Start Run
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <MapPin className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.7 km</div>
            <p className="text-xs text-muted-foreground">3 runs</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Pace</CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5:28 /km</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142 km</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Run</CardTitle>
            <MapPin className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.0 km</div>
            <p className="text-xs text-muted-foreground">Best this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-warning" />
              Running Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">{runningStreak} days</div>
            <p className="text-sm text-muted-foreground">Keep it up! 🔥</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Monthly Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">
              {monthlyGoal.current} / {monthlyGoal.target} km
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-success h-2 rounded-full" 
                style={{ width: `${(monthlyGoal.current / monthlyGoal.target) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {monthlyGoal.target - monthlyGoal.current} km to go
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Runs</TabsTrigger>
          <TabsTrigger value="routes">Saved Routes</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-4">
          {recentRuns.map((run, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{run.distance}</h3>
                      <p className="text-sm text-muted-foreground">{run.date}</p>
                      {run.route && (
                        <Badge variant="secondary" className="mt-2">
                          <Navigation className="h-3 w-3 mr-1" />
                          {run.route}
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold">{run.time}</p>
                      <p className="text-sm text-muted-foreground">{run.pace}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {run.calories && (
                      <div className="p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Zap className="h-4 w-4 text-warning" />
                          <span className="text-xs text-muted-foreground">Calories</span>
                        </div>
                        <p className="font-semibold">{run.calories}</p>
                      </div>
                    )}
                    {run.elevation && (
                      <div className="p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Mountain className="h-4 w-4 text-accent" />
                          <span className="text-xs text-muted-foreground">Elevation</span>
                        </div>
                        <p className="font-semibold">{run.elevation}</p>
                      </div>
                    )}
                    {run.heartRate && (
                      <div className="p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Heart className="h-4 w-4 text-destructive" />
                          <span className="text-xs text-muted-foreground">Heart Rate</span>
                        </div>
                        <p className="font-semibold">{run.heartRate}</p>
                      </div>
                    )}
                    {run.weather && (
                      <div className="p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground">Weather</span>
                        </div>
                        <p className="font-semibold text-sm">{run.weather}</p>
                      </div>
                    )}
                  </div>

                  {run.splits && run.splits.length > 0 && (
                    <div className="bg-secondary p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">Split Times</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {run.splits.map((split, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {i + 1}km: {split}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="routes" className="space-y-3 mt-4">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-3">
                {["Morning Loop", "River Trail", "Park Circuit", "Hill Challenge"].map((route, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <Navigation className="h-4 w-4" />
                        {route}
                      </h4>
                      <p className="text-sm text-muted-foreground">Last run: {idx + 1} days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Volume2 className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Audio Cues Enabled</h3>
              <p className="text-sm text-muted-foreground">
                Get pace updates every kilometer and coaching tips during your run
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Running;
