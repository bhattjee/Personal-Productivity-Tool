import { Home, Search, Library, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black h-full flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <Button 
          variant="ghost" 
          className="justify-start gap-4 text-muted-foreground hover:text-foreground transition-colors h-10 px-3"
        >
          <Home className="h-6 w-6" />
          <span className="font-semibold text-base">Home</span>
        </Button>
        <Button 
          variant="ghost" 
          className="justify-start gap-4 text-muted-foreground hover:text-foreground transition-colors h-10 px-3"
        >
          <Search className="h-6 w-6" />
          <span className="font-semibold text-base">Search</span>
        </Button>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="justify-start gap-4 text-muted-foreground hover:text-foreground transition-colors h-10 px-3 flex-1"
          >
            <Library className="h-6 w-6" />
            <span className="font-semibold text-base">Your Library</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-foreground h-8 w-8"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-secondary rounded-lg p-4 flex flex-col gap-3">
            <h3 className="font-bold text-sm">Create your first playlist</h3>
            <p className="text-xs text-muted-foreground">It's easy, we'll help you</p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full h-8 text-xs">
              Create playlist
            </Button>
          </div>

          <div className="bg-secondary rounded-lg p-4 flex flex-col gap-3">
            <h3 className="font-bold text-sm">Let's find some podcasts to follow</h3>
            <p className="text-xs text-muted-foreground">We'll keep you updated on new episodes</p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full h-8 text-xs">
              Browse podcasts
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
