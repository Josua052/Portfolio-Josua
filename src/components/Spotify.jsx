import React from "react";

const SpotifyEmbed = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
        overflow: "hidden",
        backgroundColor: "#121212",
      }}
    >
      <iframe
        style={{ border: "none", borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1UWf8bdapMA8w3fldQbYMQ?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
