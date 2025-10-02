import { Dumbbell, TrendingUp, Trophy, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gym = () => {
  const workouts = [
    { name: "Bench Press", sets: 4, reps: 8, weight: "185 lbs", pr: "225 lbs" },
    { name: "Squats", sets: 4, reps: 10, weight: "225 lbs", pr: "275 lbs" },
    { name: "Deadlift", sets: 3, reps: 6, weight: "315 lbs", pr: "365 lbs" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gym Stats & Exercise Tracker</h1>
          <p className="text-muted-foreground mt-1">Track your progress and PRs</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Log Workout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workouts This Week</CardTitle>
            <Dumbbell className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <TrendingUp className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,500 lbs</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Personal Records</CardTitle>
            <Trophy className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Workouts</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-4">
          {workouts.map((workout, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{workout.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {workout.sets} sets × {workout.reps} reps @ {workout.weight}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">PR</p>
                    <p className="font-semibold text-primary">{workout.pr}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="exercises">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-muted-foreground">Exercise library coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-muted-foreground">Progress charts coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gym;
