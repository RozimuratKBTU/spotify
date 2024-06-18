import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { PlaylistsCard } from "../PlaylistCard";
import { getMusics, getPlaylists } from "../../api/musicService";

export const Playlistsection = ({playlist_id ,title, artists, onPlay }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = await getMusics();
        setMusics(data);
      }catch (error) {
        console.error(error);
      }
    }

    fetchPlaylists();
  }, []);

  return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-2xl font-bold text-white hover:underline">
            {title || "Featured Playlists"}
          </Link>
          <Link
              to="/"
              className="text-sm font-bold tracking-[2px] hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="horizontal-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {musics && musics.filter(music => music.playlist === playlist_id).map((music, index) => (
              <PlaylistsCard
                  key={index}
                  author_id={music.author}
                  title={music.title}
                  description={music.description}
                  imageUrl={music.image_link}
                  file_link={music.file_link}
                  onPlay={onPlay}
                  artists={artists}
              />
          ))}
        </div>
      </div>
  );
};
