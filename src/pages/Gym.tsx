import { useState } from "react";
import { Dumbbell, TrendingUp, Trophy, Plus, Timer, Camera, Ruler, Play, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: string;
  pr: string;
  bodyPart: string;
  restTime?: number;
  volumeLoad?: number;
}

const Gym = () => {
  const [workouts] = useState<Exercise[]>([
    { 
      name: "Bench Press", 
      sets: 4, 
      reps: 8, 
      weight: "185 lbs", 
      pr: "225 lbs",
      bodyPart: "Chest",
      restTime: 120,
      volumeLoad: 5920
    },
    { 
      name: "Squats", 
      sets: 4, 
      reps: 10, 
      weight: "225 lbs", 
      pr: "275 lbs",
      bodyPart: "Legs",
      restTime: 180,
      volumeLoad: 9000
    },
    { 
      name: "Deadlift", 
      sets: 3, 
      reps: 6, 
      weight: "315 lbs", 
      pr: "365 lbs",
      bodyPart: "Back",
      restTime: 240,
      volumeLoad: 5670
    },
  ]);

  const [measurements] = useState({
    chest: "42 in",
    arms: "15.5 in",
    waist: "32 in",
    thighs: "24 in",
    weight: "180 lbs"
  });

  const exerciseLibrary = [
    { name: "Push-ups", bodyPart: "Chest", difficulty: "Beginner" },
    { name: "Pull-ups", bodyPart: "Back", difficulty: "Intermediate" },
    { name: "Barbell Rows", bodyPart: "Back", difficulty: "Intermediate" },
    { name: "Shoulder Press", bodyPart: "Shoulders", difficulty: "Intermediate" },
    { name: "Leg Press", bodyPart: "Legs", difficulty: "Beginner" },
    { name: "Romanian Deadlift", bodyPart: "Legs", difficulty: "Advanced" },
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
          <TabsTrigger value="library">Exercise Library</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-4">
          {workouts.map((workout, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{workout.name}</h3>
                        <Badge variant="secondary" className="text-xs">{workout.bodyPart}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {workout.sets} sets × {workout.reps} reps @ {workout.weight}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Personal Record</p>
                      <p className="font-semibold text-primary text-lg">{workout.pr}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Timer className="h-4 w-4" />
                        <span>{workout.restTime}s rest</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{workout.volumeLoad?.toLocaleString()} lbs volume</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Start Set
                    </Button>
                  </div>

                  <Progress value={(parseInt(workout.weight) / parseInt(workout.pr)) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground text-right">
                    {Math.round((parseInt(workout.weight) / parseInt(workout.pr)) * 100)}% of PR
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="library" className="space-y-3 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Exercise Library (200+ exercises)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {exerciseLibrary.map((exercise, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div>
                    <h4 className="font-medium">{exercise.name}</h4>
                    <p className="text-sm text-muted-foreground">{exercise.bodyPart}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {exercise.difficulty}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Browse All Exercises
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="measurements" className="space-y-4 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  Body Measurements
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Progress Photo
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">Chest</p>
                  <p className="text-2xl font-bold">{measurements.chest}</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">Arms</p>
                  <p className="text-2xl font-bold">{measurements.arms}</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">Waist</p>
                  <p className="text-2xl font-bold">{measurements.waist}</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">Thighs</p>
                  <p className="text-2xl font-bold">{measurements.thighs}</p>
                </div>
              </div>
              <div className="p-4 bg-gradient-card rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Current Weight</p>
                <p className="text-3xl font-bold">{measurements.weight}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-3 mt-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Workout Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Push Day", "Pull Day", "Leg Day", "Full Body"].map((template, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <h4 className="font-semibold">{template}</h4>
                    <p className="text-sm text-muted-foreground">6-8 exercises • 60-90 mins</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create Template
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gym;
