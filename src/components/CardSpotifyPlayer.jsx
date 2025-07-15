import React, { useEffect, useRef, useState } from "react";
import { getRandomTrack } from "../hooks/spotifyAPI";
import "./CardSpotifyPlayer.css";

const CardSpotifyPlayer = () => {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const randomTrack = await getRandomTrack();
        if (randomTrack) {
          setTrack(randomTrack);
        } else {
          console.error("Track tidak ditemukan");
        }
      } catch (error) {
        console.error("Gagal mengambil track:", error);
      }
    };

    fetchTrack();
  }, []);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Gagal memutar audio:", err);
      }
    }
  };

  if (!track) {
    return <p className="loading-text">Loading...</p>;
  }

  const hasPreview = !!track.preview_url;

  return (
    <div className="spotify-card">
      <img src={track.album_image} alt="Album" className="album-image" />
      <h3 className="track-name">{track.name}</h3>
      <p className="track-artist">{track.artist}</p>

      {hasPreview ? (
        <>
          <button className="play-button" onClick={handlePlay}>
            {isPlaying ? "⏸ Sedang Diputar" : "🎵 Putar Musik"}
          </button>
          <audio
            ref={audioRef}
            src={track.preview_url}
            controls
            className="audio-player"
          />
        </>
      ) : (
        <p className="no-preview">Preview tidak tersedia</p>
      )}

      <a
        href={track.spotify_url}
        target="_blank"
        rel="noreferrer"
        className="spotify-link"
      >
        Dengarkan di Spotify
      </a>
    </div>
  );
};

export default CardSpotifyPlayer;
