import { Plus, Clock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface Alarm {
  id: string;
  time: string;
  label: string;
  days: string[];
  enabled: boolean;
}

const Alarms = () => {
  const alarms: Alarm[] = [
    { id: "1", time: "06:00", label: "Morning Workout", days: ["Mon", "Wed", "Fri"], enabled: true },
    { id: "2", time: "07:30", label: "Wake Up", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], enabled: true },
    { id: "3", time: "09:00", label: "Weekend Sleep", days: ["Sat", "Sun"], enabled: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Morning Alarms</h1>
          <p className="text-muted-foreground mt-1">Start your day right</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Alarm
        </Button>
      </div>

      <div className="space-y-4">
        {alarms.map((alarm) => (
          <Card key={alarm.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Bell className="h-6 w-6 text-primary" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{alarm.time}</span>
                      <span className="text-sm text-muted-foreground">{alarm.label}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {alarm.days.map((day) => (
                        <span key={day} className="text-xs px-2 py-1 bg-secondary rounded">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Switch checked={alarm.enabled} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-semibold">Smart Wake-Up</h3>
              <p className="text-sm text-muted-foreground">
                Wake up within a 30-minute window at your optimal sleep cycle
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alarms;
