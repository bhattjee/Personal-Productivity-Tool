import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PlaylistCard = ({ title, description, imageUrl }: PlaylistCardProps) => {
  return (
    <div className="group bg-secondary hover:bg-muted rounded-lg p-4 transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full aspect-square object-cover rounded-md shadow-card"
        />
        <Button 
          size="icon"
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-primary hover:bg-primary/90 hover:scale-110 rounded-full h-12 w-12 shadow-lg"
        >
          <Play className="h-5 w-5 fill-background text-background ml-0.5" />
        </Button>
      </div>
      <h3 className="font-bold text-base mb-2 truncate">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
};

export default PlaylistCard;
