// src/hooks/spotifyAPI.js
import axios from "axios";

// Ganti dengan Client ID dan Client Secret kamu
const CLIENT_ID = "bc94e8c60c1046679927d8f8872219fc";
const CLIENT_SECRET = "dd69e90c4b8340ae8138f8e8c0ebaa37";

// Dapatkan token akses dari Spotify
const getAccessToken = async () => {
  try {
    const result = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Access Token:", result.data.access_token); // ✅ Tambahkan ini
    return result.data.access_token;
  } catch (error) {
    console.error("Gagal ambil token:", error.response?.data || error);
    return null;
  }
};


// Ambil daftar track dari kategori (bisa kamu ubah ke playlist juga)
const getRandomTrack = async () => {
  try {
    const token = await getAccessToken();
    if (!token) throw new Error("Token kosong");

    const playlistId = "37i9dQZF1DWXRqgorJj26U"; // Top Hits Indonesia

    const tracksResponse = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=50`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    const tracks = tracksResponse.data.items
      .map((item) => item.track)
      .filter((track) => track && track.preview_url); // HANYA yang punya preview

    if (tracks.length === 0) {
      console.warn("Tidak ada track dengan preview_url.");
      return null;
    }

    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    return {
      name: randomTrack.name,
      artist: randomTrack.artists.map((a) => a.name).join(", "),
      preview_url: randomTrack.preview_url,
      spotify_url: randomTrack.external_urls.spotify,
      album_image: randomTrack.album.images[0].url,
    };
  } catch (err) {
    console.error("Gagal ambil track Spotify:", err.response?.data || err);
    return null;
  }
};




export { getRandomTrack };
