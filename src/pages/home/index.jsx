import React, { useState, useEffect } from "react";
import { Artistsection } from "../../components/Artistsection";
import Header from "../../components/Header";
import { Playlistsection } from "../../components/PlaylistSection";
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import { Footer } from "../../components/footer";
import MusicPlayer from '../../components/MusicPlayer';
import { getAuthors, getPlaylists } from "../../api/musicService";

export const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [playlists, setPlaylists] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const data = await getPlaylists();
                setPlaylists(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlaylists();
    }, []);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const data = await getAuthors();
                setArtists(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArtists();

    }, []);

    const handleNext = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlists.length);
        setCurrentTrack(playlists[(currentTrackIndex + 1) % playlists.length].file_link);
    };

    const handlePrevious = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlists.length) % playlists.length);
        setCurrentTrack(playlists[(currentTrackIndex - 1 + playlists.length) % playlists.length].file_link);
    };

    const handlePlay = (fileLink) => {
        setCurrentTrack(fileLink);
    };

    return (
        <div className="min-h-screen text-gray-300 flex flex-col">
            <Header setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className="bg-custom-section pt-28 md:pl-72 p-8 flex-grow">
                {playlists.map((playlist) => (
                    <Playlistsection
                        key={playlist._id}
                        title={playlist.title}
                        playlist_id={playlist._id}
                        artists={artists}
                        onPlay={handlePlay}
                    />
                ))}
                <Artistsection />
            </div>
            <div className="fixed bottom-0 w-4/5 bg-gray-900 right-0">
                <MusicPlayer
                    src={currentTrack}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            </div>
            <Footer />

        </div>
    );
};
