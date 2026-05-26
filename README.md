<h1 align="center">JioSaavn API (Vercel)</h1>

<p align="center">
  Reverse-engineered backend for JioSaavn.<br>
  Unofficial API. No permission. Just vibes 😎
</p>

<hr>

<h2>⚠️ Before you get excited</h2>

<ul>
  <li>This is <b>NOT affiliated with JioSaavn</b></li>
  <li>All content belongs to their respective owners</li>
  <li>This is for <b>educational / personal use</b></li>
</ul>

<hr>

<h2>🚀 What this thing actually does</h2>

<ul>
  <li>🔍 Search songs, albums, artists, playlists</li>
  <li>📀 Fetch artist / playlist details</li>
  <li>🌍 Uses Mumbai region for proper English results</li>
</ul>

<hr>

<h2>📦 API Endpoints</h2>

<h3>🔍 Search</h3>

<pre>
/api/songs?q={query}

/api/albums?q={query}

/api/artists?q={query}

/api/playlists?q={query}
</pre>

<h3>📀 Details</h3>

<pre>
/api/playlist?token={playlistToken}

/api/artist?token={artistToken}
</pre>

<hr>

<h2>🎧 Audio streaming</h2>

<p>You’ll get:</p>

<pre>
"encrypted_media_url": "ID2ieOjCrwfg..."
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
git clone https://github.com/ODSkyler/js.git
cd js
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
  <li>Playlists may require pagination</li>
  <li>Some artist metadata is incomplete</li>
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
