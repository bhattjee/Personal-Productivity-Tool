import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-muted/50 to-transparent">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-black/70 hover:bg-black h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-black/70 hover:bg-black h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-foreground font-semibold text-sm h-8 px-4"
        >
          Premium
        </Button>
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-foreground font-semibold text-sm h-8 px-4"
        >
          Support
        </Button>
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-foreground font-semibold text-sm h-8 px-4"
        >
          Download
        </Button>
        <div className="w-px h-4 bg-muted" />
        <Button 
          variant="ghost" 
          className="font-bold text-sm h-9 px-6 hover:scale-105 transition-transform"
        >
          Sign up
        </Button>
        <Button 
          className="bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full h-12 px-8 hover:scale-105 transition-transform"
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

export default TopBar;
