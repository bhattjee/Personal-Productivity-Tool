import { 
  LayoutDashboard, 
  CheckSquare, 
  Target, 
  Clock, 
  BookOpen, 
  Dumbbell, 
  Activity, 
  Moon, 
  TrendingUp, 
  Quote,
  Wallet,
  ListChecks
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "To-Do List", url: "/todos", icon: CheckSquare },
  { title: "Habit Tracker", url: "/habits", icon: Target },
  { title: "Morning Alarm", url: "/alarms", icon: Clock },
  { title: "Daily Journal", url: "/journal", icon: BookOpen },
  { title: "Gym Stats", url: "/gym", icon: Dumbbell },
  { title: "Running", url: "/running", icon: Activity },
  { title: "Bedtime", url: "/bedtime", icon: Moon },
  { title: "Streaks", url: "/streaks", icon: TrendingUp },
  { title: "Daily Quotes", url: "/quotes", icon: Quote },
  { title: "Expense Tracker", url: "/expenses", icon: Wallet },
  { title: "Lists", url: "/lists", icon: ListChecks },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar h-full flex flex-col p-6 gap-6 border-r border-sidebar-border">
      <div className="mb-4">
        <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Life Flow
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Optimize Your Life</p>
      </div>

      <nav className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto bg-gradient-card rounded-lg p-4 flex flex-col gap-3">
        <h3 className="font-bold text-sm">Track Your Progress</h3>
        <p className="text-xs text-muted-foreground">
          Unlock insights and achievements as you build better habits
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-8 text-xs">
          View Analytics
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
