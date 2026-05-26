export default function handler(
  req,
  res
) {
  return res.status(200).json({
    status: "active",

    name:
      "Rhythmax JioSaavn API",

    repo:
      "ODSkyler/js",

    version:
      "1.0.0",

    endpoints: {
      song_search:
        "/api/songs?q=",

      album_search:
        "/api/albums?q=",

      artist_search:
        "/api/artists?q=",

      playlist_search:
        "/api/playlists?q=",

      artist_details:
        "/api/artist?token=",

      playlist_details:
        "/api/playlist?token=",

      for_other_endpoints:
        "check out Saavn API for Cloudflare on my GitHub",
    },
  });
}
