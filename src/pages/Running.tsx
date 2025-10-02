import { Play, MapPin, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Running = () => {
  const recentRuns = [
    { date: "Today", distance: "5.2 km", time: "28:15", pace: "5:26 /km" },
    { date: "2 days ago", distance: "10.0 km", time: "56:30", pace: "5:39 /km" },
    { date: "5 days ago", distance: "3.5 km", time: "18:45", pace: "5:21 /km" },
  ];

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

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Recent Runs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentRuns.map((run, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                <p className="font-semibold">{run.distance}</p>
                <p className="text-sm text-muted-foreground">{run.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{run.time}</p>
                <p className="text-sm text-muted-foreground">{run.pace}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Running;
