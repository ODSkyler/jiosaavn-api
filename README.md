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
  <li>📀 Fetch Language based homefeed and new releases</li>
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

<b>Playlist details:</b> /api/playlist?token={playlistToken}

<b>Artist details:</b> /api/artist?token={artistToken}
</pre>

<h3>Other Endpoints</h3>

<pre>
<b>Related albums:</b> /api/related?id={albumId}

<b>Language based home feed:</b> /api/home?lang={language}

<b>Language based new releases:</b> /api/new?lang={language}
</pre>

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

<hr>

<h2>⭐ If this helped you then drop a star...</h2>
