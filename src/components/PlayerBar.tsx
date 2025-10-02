import { Heart, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const PlayerBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-border px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Currently Playing */}
        <div className="flex items-center gap-3 w-80">
          <div className="h-14 w-14 bg-muted rounded flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">Song Title</p>
            <p className="text-xs text-muted-foreground truncate">Artist Name</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              className="h-8 w-8 bg-foreground hover:bg-foreground/90 rounded-full hover:scale-105 transition-transform"
            >
              <Play className="h-4 w-4 text-background fill-background ml-0.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">0:00</span>
            <Slider defaultValue={[33]} max={100} step={1} className="flex-1" />
            <span className="text-xs text-muted-foreground w-10">3:45</span>
          </div>
        </div>

        {/* Volume & Other Controls */}
        <div className="flex items-center gap-2 w-80 justify-end">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Volume2 className="h-4 w-4" />
          </Button>
          <Slider defaultValue={[66]} max={100} step={1} className="w-24" />
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
