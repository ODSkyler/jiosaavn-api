<h1 align="center">JioSaavn API</h1>

<p align="center">
  Reverse-engineered backend for JioSaavn.<br>
  Unofficial API. No permission. Just vibes 😎
</p>

<hr>

<h2>Disclaimer</h2>

<ul>
  <li>This project is <b>not affiliated with JioSaavn</b></li>
  <li>All content belongs to their respective owners</li>
  <li>This is for <b>educational / personal use</b></li>
</ul>

<hr>

<h2>🚀 What this API does</h2>

<ul>
  <li>🔍 Search songs, albums, artists, playlists</li>
  <li>📀 Fetch song / album / artist / playlist details</li>
  <li>📀 Fetch Related albums, Language based homefeed and new releases</li>
</ul>

<hr>

<h2>📦 API Endpoints</h2>

<h3>🔍 Search</h3>

<pre>
<b>Songs search:</b> /api/songs?q={query}

<b>Albums search:</b> /api/albums?q={query}

<b>Artists search:</b> /api/artists?q={query}

<b>Playlists search:</b> /api/playlists?q={query}
</pre>

<h3>📀 Details</h3>

<pre>
<b>Song details:</b> /api/song?token={songToken}

<b>Album details:</b> /api/album?token={albumToken}

<b>Artist details:</b> /api/artist?token={artistToken}&page=0

<b>Playlist details:</b> /api/playlist?token={playlistToken}
</pre>

<h3>Other Endpoints</h3>

<pre>
<b>Related albums:</b> /api/related?id={albumId}

<b>Language based home feed:</b> /api/home?lang={language}

<b>Language based new releases:</b> /api/new?lang={language}
</pre>

<hr>

<h2>API Schema</h2>

<p>These responses are samples and you should host the API yourself.</p>

<!-- ==================== ROOT ==================== -->

<h3><code>GET /</code></h3>

<p>Returns information about the API.</p>

<h4>Params</h4>

<p>None.</p>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
status: "active",
name: "JioSaavn API",
repo: "ODSkyler/jiosaavn-api"
}
</code></pre>


<!-- ==================== SONG SEARCH ==================== -->

<h3><code>GET /api/songs</code></h3>

<p>Search for songs.</p>

<h4>Params</h4>

<ul>
  <li><code>q</code>: <code>string</code> <b>(required)</b> — Search query.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "total": 26518,
  "start": 1,
  "results": [
    {
      "id": "BiPDKGjV",
      "token": "MgE7dT93XWU",
      "title": "Out of Time",
      "subtitle": "The Weeknd - Dawn FM",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/out-of-time/MgE7dT93XWU",
      "image": "https://c.saavncdn.com/739/Dawn-FM-English-2022-20240207050736-150x150.jpg",
      "language": "english",
      "year": "2022",
      "play_count": "612848",
      "isExplicit": false,
      "more_info": {
        "album_id": "32002136",
        "album_token": "nVyO7fF4TIQ_",
        "album": "Dawn FM",
        "album_url": "https://www.jiosaavn.com/album/dawn-fm/nVyO7fF4TIQ_",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjvOrZHJ3NJfS/Z3TGpniJjw8gwFDqbt0unByKKL6/Z/qCr2on7HQrRw7tS9a8Gtq",
        "duration": "214",
        "copyright_text": "℗ 2022 The Weeknd XO, Inc., marketed by Republic Records, a division of UMG Recordings, Inc.",
        "artists": {
          "primary": [
            {
              "id": "615155",
              "artist_token": "FJRb7GbYWrQ_",
              "name": "The Weeknd",
              "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
              "perma_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
            }
          ],
          "featured": []
        },
        "release_date": null,
        "vcode": "010912291647938",
        "vlink": "https://jiotunepreview.jio.com/content/Converted/010912291603848.mp3"
      }
    },
   (MORE RESULTS)
  ]
 }
</code></pre>


<!-- ==================== ALBUM SEARCH ==================== -->

<h3><code>GET /api/albums</code></h3>

<p>Search for albums.</p>

<h4>Params</h4>

<ul>
  <li><code>q</code>: <code>string</code> <b>(required)</b> — Search query.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "total": 135,
  "start": 1,
  "results": [
    {
      "id": "37633123",
      "token": "sFq24sTmy5E_",
      "title": "Dawn FM (Alternate World)",
      "subtitle": "The Weeknd",
      "type": "album",
      "perma_url": "https://www.jiosaavn.com/album/dawn-fm-alternate-world/sFq24sTmy5E_",
      "image": "https://c.saavncdn.com/120/Dawn-FM-Alternate-World-English-2022-20240207050739-150x150.jpg",
      "language": "english",
      "year": "2022",
      "play_count": "",
      "isExplicit": true,
      "more_info": {
        "song_count": "24",
        "artists": {
          "primary": [
            {
              "id": "615155",
              "name": "The Weeknd",
              "image": "",
              "perma_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
            }
          ],
          "featured": []
        }
      }
    },
  (MORE RESULTS)
  ]
 }
</code></pre>


<!-- ==================== ARTIST SEARCH ==================== -->

<h3><code>GET /api/artists</code></h3>

<p>Search for artists.</p>

<h4>Params</h4>

<ul>
  <li><code>q</code>: <code>string</code> <b>(required)</b> — Search query.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "total": 70,
  "start": 1,
  "results": [
    {
      "name": "The Weeknd",
      "id": "615155",
      "token": "FJRb7GbYWrQ_",
      "ctr": 3815,
      "entity": 1,
      "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_50x50.jpg",
      "perma_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_",
      "type": "artist"
    },
  (MORE RESULTS)
  ]
 }
</code></pre>


<!-- ==================== PLAYLIST SEARCH ==================== -->

<h3><code>GET /api/playlists</code></h3>

<p>Search for playlists.</p>

<h4>Params</h4>

<ul>
  <li><code>q</code>: <code>string</code> <b>(required)</b> — Search query.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "total": 186,
  "start": 1,
  "results": [
    {
      "id": "85897886",
      "token": "TDgTn0rFX18_",
      "title": "Let's Play - The Weeknd",
      "subtitle": "50 Songs",
      "type": "playlist",
      "image": "https://c.saavncdn.com/editorial/Let_sPlayTheWeeknd_20250205064119_150x150.jpg",
      "perma_url": "https://www.jiosaavn.com/featured/lets-play-the-weeknd/TDgTn0rFX18_",
      "more_info": {
        "firstname": "JioSaavn",
        "artist_name": [
          "The Weeknd",
          "Abel Tesfaye"
        ],
        "entity_type": "playlist",
        "song_count": "50",
        "language": "english"
      }
    },
  (MORE RESULTS)
  ]
 }
</code></pre>

<!-- ==================== SONG DETAILS ==================== -->

<h3><code>GET /api/song</code></h3>

<p>Returns song details given an song token.</p>

<h4>Params</h4>

<ul>
  <li><code>token</code>: <code>string</code> <b>(required)</b> — JioSaavn song token.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "id": "BiPDKGjV",
  "token": "MgE7dT93XWU",
  "title": "Out of Time",
  "subtitle": "The Weeknd - Dawn FM",
  "type": "song",
  "perma_url": "https://www.jiosaavn.com/song/out-of-time/MgE7dT93XWU",
  "image": "https://c.saavncdn.com/739/Dawn-FM-English-2022-20240207050736-150x150.jpg",
  "language": "english",
  "year": "2022",
  "play_count": "612851",
  "isExplicit": false,
  "more_info": {
    "music": "Abel Tesfaye, Daniel Lopatin, Tomoko Aran, Tetsuro Harada",
    "album_id": "32002136",
    "album_token": "nVyO7fF4TIQ_",
    "album": "Dawn FM",
    "label": "XO / Republic Records",
    "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjvOrZHJ3NJfS/Z3TGpniJjw8gwFDqbt0unByKKL6/Z/qCr2on7HQrRw7tS9a8Gtq",
    "album_url": "https://www.jiosaavn.com/album/dawn-fm/nVyO7fF4TIQ_",
    "duration": "214",
    "copyright_text": "℗ 2022 The Weeknd XO, Inc., marketed by Republic Records, a division of UMG Recordings, Inc.",
    "artists": {
      "primary": [
        {
          "id": "615155",
          "token": "FJRb7GbYWrQ_",
          "name": "The Weeknd",
          "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
          "perma_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
        }
      ],
      "featured": [],
      "credits": [
        {
          "id": "615156",
          "token": "chP5O9M7POQ_",
          "name": "Abel Tesfaye",
          "role": "music",
          "perma_url": "https://www.jiosaavn.com/artist/abel-tesfaye-songs/chP5O9M7POQ_"
        },
        {
          "id": "600801",
          "token": "kcRmr2-AyG0_",
          "name": "Daniel Lopatin",
          "role": "music",
          "perma_url": "https://www.jiosaavn.com/artist/daniel-lopatin-songs/kcRmr2-AyG0_"
        },
        {
          "id": "6566789",
          "token": "TMWQDL,dZaw_",
          "name": "Tomoko Aran",
          "role": "music",
          "perma_url": "https://www.jiosaavn.com/artist/tomoko-aran-songs/TMWQDL,dZaw_"
        },
        {
          "id": "12182297",
          "token": "9KP4azqatlY_",
          "name": "Tetsuro Harada",
          "role": "music",
          "perma_url": "https://www.jiosaavn.com/artist/tetsuro-harada-songs/9KP4azqatlY_"
        },
        {
          "id": "615156",
          "token": "chP5O9M7POQ_",
          "name": "Abel Tesfaye",
          "role": "lyricist",
          "perma_url": "https://www.jiosaavn.com/artist/abel-tesfaye-songs/chP5O9M7POQ_"
        },
        {
          "id": "600801",
          "token": "kcRmr2-AyG0_",
          "name": "Daniel Lopatin",
          "role": "lyricist",
          "perma_url": "https://www.jiosaavn.com/artist/daniel-lopatin-songs/kcRmr2-AyG0_"
        },
        {
          "id": "6566789",
          "token": "TMWQDL,dZaw_",
          "name": "Tomoko Aran",
          "role": "lyricist",
          "perma_url": "https://www.jiosaavn.com/artist/tomoko-aran-songs/TMWQDL,dZaw_"
        },
        {
          "id": "12182297",
          "token": "9KP4azqatlY_",
          "name": "Tetsuro Harada",
          "role": "lyricist",
          "perma_url": "https://www.jiosaavn.com/artist/tetsuro-harada-songs/9KP4azqatlY_"
        }
      ]
    },
    "release_date": "2022-01-07",
    "label_url": "/label/xo-republic-records-albums/dvkQ0jfSYvU_",
    "vcode": "010912291647938",
    "vlink": "https://jiotunepreview.jio.com/content/Converted/010912291603848.mp3"
  }
}
</code></pre>

<!-- ==================== ALBUM DETAILS ==================== -->

<h3><code>GET /api/album</code></h3>

<p>Returns album details given an album token.</p>

<h4>Params</h4>

<ul>
  <li><code>token</code>: <code>string</code> <b>(required)</b> — JioSaavn album token.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "id": "32002136",
  "token": "nVyO7fF4TIQ_",
  "title": "Dawn FM",
  "subtitle": "The Weeknd",
  "header_desc": "2022 · English Album · The Weeknd",
  "type": "album",
  "album_url": "https://www.jiosaavn.com/album/dawn-fm/nVyO7fF4TIQ_",
  "image": "https://c.saavncdn.com/739/Dawn-FM-English-2022-20240207050736-150x150.jpg",
  "language": "english",
  "year": "2022",
  "isExplicit": false,
  "song_count": "16",
  "artists": {
    "primary": [
      {
        "id": "615155",
        "artist_token": "FJRb7GbYWrQ_",
        "name": "The Weeknd",
        "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
        "type": "artist",
        "artist_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
      }
    ],
    "featured": []
  },
  "copyright": "© 2022 The Weeknd XO, Inc.",
  "songs": [
    {
      "id": "Sjo9ICrv",
      "token": "IwIECD1zRUU",
      "title": "Dawn FM",
      "subtitle": "The Weeknd - Dawn FM",
      "type": "track",
      "track_url": "https://www.jiosaavn.com/song/dawn-fm/IwIECD1zRUU",
      "duration": "96",
      "image": "https://c.saavncdn.com/739/Dawn-FM-English-2022-20240207050736-150x150.jpg",
      "language": "english",
      "year": "2022",
      "isExplicit": false,
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDycVQ/GpK9kmKdob0kXhkl30hfzwepGOYlgTxebJFRqmM/9VHpflP3nBw7tS9a8Gtq",
      "more_info": {
        "album_id": "nVyO7fF4TIQ_",
        "album": "Dawn FM",
        "album_url": "https://www.jiosaavn.com/album/dawn-fm/nVyO7fF4TIQ_",
        "release_date": "2022-01-07",
        "label": "XO / Republic Records",
        "preview": "https://jiotunepreview.jio.com/content/Converted/010912291603842.mp3",
        "copyright": "℗ 2022 The Weeknd XO, Inc., marketed by Republic Records, a division of UMG Recordings, Inc."
      },
      "artists": {
        "primary": [
          {
            "id": "615155",
            "artist_token": "FJRb7GbYWrQ_",
            "name": "The Weeknd",
            "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
          }
        ],
        "featured": []
      }
    },
  (OTHER TRACKS)
  ]
}
</code></pre>


<!-- ==================== ARTIST DETAILS ==================== -->

<h3><code>GET /api/artist</code></h3>

<p>Returns artist details given an artist token.</p>

<h4>Params</h4>

<ul>
  <li><code>token</code>: <code>string</code> <b>(required)</b> — JioSaavn artist token.</li>
  <li><code>page</code>: <code>int</code> <b>(required)</b> — Page number: Default = 0.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "id": "FJRb7GbYWrQ_",
  "name": "The Weeknd",
  "subtitle": "Artist • 542549 Listeners",
  "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
  "topSongs": [
    {
      "id": "JAsvYVl7Yl8",
      "title": "Starboy",
      "subtitle": "The Weeknd ft. Daft Punk - The Highlights",
      "type": "track",
      "track_url": "https://www.jiosaavn.com/song/starboy/JAsvYVl7Yl8",
      "duration": "230",
      "image": "https://c.saavncdn.com/396/The-Highlights-English-2021-20240207045714-150x150.jpg",
      "language": "english",
      "isExplicit": true,
      "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyUAfhmijvFBT8pPh5PqKgzsRHfUZzMKSjj3NUx57Nm2u/4CmI0GLa9hw7tS9a8Gtq",
      "more_info": {
        "album_id": "U4LxdjTyzrM_",
        "album": "The Highlights",
        "album_url": "https://www.jiosaavn.com/album/the-highlights/U4LxdjTyzrM_",
        "release_date": "2021",
        "label": "The Weeknd/Lyric",
        "preview": "https://jiotunepreview.jio.com/content/Converted/010912292216834.mp3",
        "copyright": "℗ 2016 The Weeknd XO, Inc., Manufactured and Marketed by Republic Records, a Division of UMG Recordings, Inc."
      },
      "artists": {
        "primary": [
          {
            "id": "FJRb7GbYWrQ_",
            "name": "The Weeknd",
            "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
          }
        ],
        "featured": [
          {
            "id": "E2WPnUB,qsM_",
            "name": "Daft Punk",
            "image": "https://c.saavncdn.com/artists/Daft_Punk_20170921122444_150x150.jpg",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/daft-punk-songs/E2WPnUB,qsM_"
          }
        ]
      }
    },
  (MORE SONGS)
  ],
  "topAlbums": [
    {
      "id": "68176103",
      "token": "6hb05Hwx0n8_",
      "title": "São Paulo",
      "subtitle": "The Weeknd, Anitta",
      "type": "album",
      "perma_url": "https://www.jiosaavn.com/album/sao-paulo/6hb05Hwx0n8_",
      "image": "https://c.saavncdn.com/681/S-o-Paulo-English-2025-20250919103533-150x150.jpg",
      "language": "english",
      "year": "2025",
      "isExplicit": true,
      "song_count": "4",
      "artists": {
        "primary": [
          {
            "id": "FJRb7GbYWrQ_",
            "name": "The Weeknd",
            "image": "",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
          },
          {
            "id": "Daj1YlIrIW4_",
            "name": "Anitta",
            "image": "",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/anitta-songs/Daj1YlIrIW4_"
          }
        ],
        "featured": []
      }
    },
  (MORE ALBUMS)
  ],
  "singles": [
    {
      "id": "12193364",
      "token": "HpGnk9KSgAs_",
      "title": "Pray For Me",
      "subtitle": "The Weeknd, Kendrick Lamar",
      "type": "album",
      "perma_url": "https://www.jiosaavn.com/album/pray-for-me/HpGnk9KSgAs_",
      "image": "https://c.saavncdn.com/255/Pray-For-Me-English-2018-20240207070329-150x150.jpg",
      "language": "english",
      "year": "2018",
      "isExplicit": true,
      "song_count": "1",
      "artists": {
        "primary": [
          {
            "id": "FJRb7GbYWrQ_",
            "name": "The Weeknd",
            "image": "",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
          },
          {
            "id": "44fbKDllOW0_",
            "name": "Kendrick Lamar",
            "image": "",
            "type": "artist",
            "artist_url": "https://www.jiosaavn.com/artist/kendrick-lamar-songs/44fbKDllOW0_"
          }
        ],
        "featured": []
      }
    },
  (MORE SINGLES)
  ],
  "latest_release": [],
  "dedicated_artist_playlist": [
    {
      "id": "TDgTn0rFX18_",
      "title": "Let's Play - The Weeknd",
      "subtitle": "50 Songs",
      "type": "playlist",
      "image": "https://c.saavncdn.com/editorial/Let_sPlayTheWeeknd_20250205064119_150x150.jpg",
      "url": "https://www.jiosaavn.com/featured/lets-play-the-weeknd/TDgTn0rFX18_",
      "more_info": {
        "firstname": "JioSaavn",
        "type": "playlist",
        "lastname": "Editor",
        "song_count": "50",
        "language": "english"
      }
    },
  (MORE PLAYLISTS)
  ],
  "featured_artist_playlist": [
    {
      "id": "wHN0Jq26XqA_",
      "title": "Most Streamed Love Songs - English",
      "subtitle": "30 Songs",
      "type": "playlist",
      "image": "https://c.saavncdn.com/editorial/MostStreamedLoveSongsEnglish_20260713105656_150x150.jpg",
      "url": "https://www.jiosaavn.com/featured/most-streamed-love-songs-english/wHN0Jq26XqA_",
      "more_info": {
        "firstname": "JioSaavn",
        "type": "playlist",
        "lastname": "Editor",
        "song_count": "30",
        "language": "english"
      }
    },
  (MORE PLAYLISTS)
  ]
}
</code></pre>


<!-- ==================== PLAYLIST DETAILS ==================== -->

<h3><code>GET /api/playlist</code></h3>

<p>Returns playlist details given a playlist token.</p>

<h4>Params</h4>

<ul>
  <li><code>token</code>: <code>string</code> <b>(required)</b> — JioSaavn playlist token.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "id": "85897886",
  "token": "TDgTn0rFX18_",
  "title": "Let's Play - The Weeknd",
  "subtitle": "8.2K Fans",
  "header_desc": "The best of The Weeknd.",
  "type": "playlist",
  "perma_url": "https://www.jiosaavn.com/featured/lets-play-the-weeknd/TDgTn0rFX18_",
  "image": "https://c.saavncdn.com/editorial/Let_sPlayTheWeeknd_20250205064119.jpg",
  "more_info": {
    "firstname": "JioSaavn",
    "subtitle_desc": [
      "3h 16m",
      "50 Songs",
      "8,213 Fans"
    ]
  },
  "list_count": "50",
  "list": [
    {
      "id": "fW-Mxsnu",
      "token": "Fj9GfAxDWUY",
      "title": "Blinding Lights",
      "subtitle": "The Weeknd - After Hours",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/blinding-lights/Fj9GfAxDWUY",
      "image": "https://c.saavncdn.com/077/After-Hours-English-2020-20240207070330-150x150.jpg",
      "language": "english",
      "year": "2020",
      "play_count": "37323733",
      "isExplicit": true,
      "more_info": {
        "album_id": "19531208",
        "album_token": "y0pOEMYQFWQ_",
        "album": "After Hours",
        "label": "Republic Records",
        "label_id": "235005",
        "origin": "playlist",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyi/BLZu7e+Ua0SbPMHRYSGrRsUG6JhLOJ2PIigzqe+euc2PinCwWEMRw7tS9a8Gtq",
        "album_url": "https://www.jiosaavn.com/album/after-hours/y0pOEMYQFWQ_",
        "duration": "204",
        "copyright_text": "℗ 2019 The Weeknd XO, Inc., manufactured and marketed by Republic Records, a division of UMG Recordings, Inc.",
        "artists": {
          "primary": [
            {
              "id": "615155",
              "token": "FJRb7GbYWrQ_",
              "name": "The Weeknd",
              "image": "https://c.saavncdn.com/artists/The_Weeknd_002_20241003071400_150x150.jpg",
              "perma_url": "https://www.jiosaavn.com/artist/the-weeknd-songs/FJRb7GbYWrQ_"
            }
          ],
          "featured": []
        },
        "release_date": "2020-03-20",
        "label_url": "/label/republic-records-albums/wxE6,xIlwxo_"
      }
    },
  (MORE SONGS)
  ]
}
</code></pre>

<!-- ==================== RELATED ALBUMS ==================== -->

<h3><code>GET /api/related</code></h3>

<p>Returns related albums given an album id.</p>

<h4>Params</h4>

<ul>
  <li><code>id</code>: <code>int</code> <b>(required)</b> — JioSaavn album id.</li>
</ul>

<h4>Response</h4>

<p><code>200 OK</code></p>

<pre><code>
{
  "results": [
    {
      "id": "UuHBUSPIYBc_",
      "title": "My Dear Melancholy,",
      "subtitle": "",
      "type": "album",
      "album_url": "https://www.jiosaavn.com/album/my-dear-melancholy/UuHBUSPIYBc_",
      "image": "https://c.saavncdn.com/994/My-Dear-Melancholy-English-2019-20240207052250-150x150.jpg",
      "language": "",
      "year": "",
      "isExplicit": false,
      "song_count": "0",
      "artists": {
        "primary": [],
        "featured": []
      }
    },
  (MORE ALBUMS)
  ]
}
</code></pre>

<!-- ==================== OTHER ENDPOINTS ==================== -->
<h2>Other Endpoints</h2>

<h3><code>GET /api/home</code></h3>

<p>Returns the JioSaavn home feed based on selected music languages.</p>

<h4>Params</h4>

<ul>
  <li><code>lang</code>: <code>string</code> <b>(optional)</b> — Music language. Example: <code>english</code>, <code>hindi</code>, or <code>hindi,english</code>.</li>
</ul>


<h3><code>GET /api/new</code></h3>

<p>Returns New Releases based on selected music languages.</p>

<h4>Params</h4>

<ul>
  <li><code>lang</code>: <code>string</code> <b>(optional)</b> — Music language. Example: <code>english</code>, <code>hindi</code>, or <code>hindi,english</code>.</li>
</ul>

<hr>

<h2>🎧 Audio streaming</h2>

<p>You’ll get:</p>

<pre>
"encrypted_media_url": "ID2ieOjCrwfgDecRYptyoURselF..."
</pre>

<p>
You have to decrypt it on frontend.
</p>

<hr>

<h3>🔐 Decryption</h3>

<p>
<b>Algorithm:</b> DES-ECB<br>
<b>Key:</b> <code>38346591</code><br>
<p>Gives <b>PERMANENT AUDIO LINK</b> after decryption</p>
</p>

<hr>

<h3>🎚️ Quality options</h3>

<ul>
  <li>12 → Lowest</li>
  <li>48 → Low</li>
  <li>96 → Normal</li>
  <li>160 → High</li>
  <li>320 → MAX</li>
</ul>

<p>
AAC only.
</p>

<hr>

<h2>📥 Clone & Run Locally</h2>

<h3>1️⃣ Clone repository</h3>

<pre>
git clone https://github.com/ODSkyler/jiosaavn-api.git
cd jiosaavn-api
</pre>

<h3>2️⃣ Install dependencies</h3>

<pre>
npm install
</pre>

<h3>3️⃣ Run locally</h3>

<pre>
vercel dev
</pre>

<p>
Local server:
</p>

<pre>
http://localhost:3000
</pre>

<hr>

<h2>🚀 Deploy to Vercel</h2>

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ODSkyler/jiosaavn-api)

**One-click deployment:** Click the Deploy button above to deploy instantly to Vercel.

## OR Manually

<h3>1️⃣ Install Vercel CLI</h3>

<pre>
npm install -g vercel
</pre>

<h3>2️⃣ Login</h3>

<pre>
vercel login
</pre>

<h3>3️⃣ Deploy</h3>

<pre>
vercel
</pre>

<p>
For production:
</p>

<pre>
vercel --prod
</pre>

<hr>

<h2>🌏 Important</h2>

<p>
Set Function Region to <code>Asia Pacific: Mumbai, India (South) - ap-south-1 - bom1</code> because JioSaavn restricts English/International content outside India due to some licensing issues.
</p>
<p>
Otherwise English/international search results will not appear.
</p>

<hr>

<h2>⚠️ Known issues</h2>

<ul>
  <li>Artist details endpoint may require pagination</li>
  <li>Some artist metadata is incomplete</li>
  <li>Explicit content is marked at album level so if the album is explicit then all the tracks in the album will labeled as explicit even if some tracks in the album are clean</li>
</ul>

<hr>

<h2>📄 License</h2>

<p>
This project is licensed under MIT License
</p>

<hr>

<h2>👤 Author</h2>

<p>
<b>Built with ❤️ by OD Skyler</b>
</p>
