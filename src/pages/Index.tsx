import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import PlaylistCard from "@/components/PlaylistCard";
import PlayerBar from "@/components/PlayerBar";

import playlist1 from "@/assets/playlist1.jpg";
import playlist2 from "@/assets/playlist2.jpg";
import playlist3 from "@/assets/playlist3.jpg";
import playlist4 from "@/assets/playlist4.jpg";
import playlist5 from "@/assets/playlist5.jpg";
import playlist6 from "@/assets/playlist6.jpg";

const Index = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Ed Sheeran is on top of the Hottest 50!",
      imageUrl: playlist1,
    },
    {
      title: "Chill Vibes",
      description: "Kick back to the best new and recent chill hits.",
      imageUrl: playlist2,
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs that continue to inspire generations.",
      imageUrl: playlist3,
    },
    {
      title: "Jazz Classics",
      description: "The classic jazz recordings you need to hear.",
      imageUrl: playlist4,
    },
    {
      title: "Electronic Rising",
      description: "The best new electronic music.",
      imageUrl: playlist5,
    },
    {
      title: "Indie Folk",
      description: "Acoustic covers and original indie folk songs.",
      imageUrl: playlist6,
    },
  ];

  return (
    <div className="h-screen flex flex-col font-['Inter']">
      <div className="flex flex-1 overflow-hidden pb-24">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-muted via-background to-background">
          <TopBar />
          
          <div className="px-6 py-6">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Good afternoon</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {playlists.slice(0, 6).map((playlist, index) => (
                  <div 
                    key={index}
                    className="group bg-muted/40 hover:bg-muted rounded flex items-center gap-4 overflow-hidden cursor-pointer transition-all duration-300"
                  >
                    <img 
                      src={playlist.imageUrl} 
                      alt={playlist.title}
                      className="h-20 w-20 flex-shrink-0 object-cover"
                    />
                    <p className="font-bold text-base flex-1 truncate pr-4">{playlist.title}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl font-bold">Spotify Playlists</h2>
                <button className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                {playlists.map((playlist, index) => (
                  <PlaylistCard key={index} {...playlist} />
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl font-bold">Focus</h2>
                <button className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                {playlists.slice(0, 5).map((playlist, index) => (
                  <PlaylistCard key={index} {...playlist} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
};

export default Index;
