# 🎵 Spotify Clone  

A **Spotify-inspired music streaming web app** built using **React** and **Next.js**. The project replicates the sleek design of Spotify and includes features like authentication, playlists, and music playback.  

<img width="1911" height="965" alt="Screenshot 2025-08-23 043309" src="https://github.com/user-attachments/assets/444597ff-d547-42ed-a467-e433249ea71f" />

## 🚀 Features  

✅ **Authentication** (Login / Signup with JWT or OAuth)  
✅ **Browse Music** (Albums, Artists, and Playlists)  
✅ **Music Player** with Play / Pause / Next / Previous  
✅ **Responsive UI** (Mobile + Desktop support)  
✅ **Playlist Management** (Create & Manage Playlists)  
✅ **Search Functionality** (Songs, Artists, Albums)  
✅ **Modern UI/UX** (Styled with Tailwind / CSS Modules)  
✅ **Server-Side Rendering (SSR)** with Next.js for SEO  
✅ **API Integration** (Spotify API or custom backend)  

---

## 🛠️ Tech Stack  

- **Frontend:** React, Next.js  
- **Styling:** Tailwind CSS / Styled Components / CSS Modules  
- **State Management:** Context API / Redux / Zustand  
- **Authentication:** NextAuth.js / JWT  
- **API:** Spotify Web API / Custom Node.js backend  
- **Deployment:** Vercel / Netlify  

---

## 📂 Project Structure  
```bash
  spotify-clone/
│── public/ # Static assets (images, icons, fonts)
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Next.js pages
│ │ ├── index.js # Homepage
│ │ ├── login.js # Auth page
│ │ ├── playlist/[id].js # Dynamic playlist route
│ ├── context/ # Global state providers
│ ├── hooks/ # Custom hooks
│ ├── lib/ # API clients (Spotify API config)
│ ├── styles/ # Global styles
│ ├── utils/ # Helper functions
│── .env.local # Environment variables
│── package.json
│── README.md
```


---

## ⚙️ Installation & Setup  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone

2️⃣ Install dependencies

npm install
# or
yarn install

3️⃣ Setup environment variables
Create a .env.local file in the root directory:

NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_client_secret
JWT_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000


4️⃣ Run the development server

npm run dev
# or
yarn dev


Your app will be running at 👉 http://localhost:3000

5️⃣ Build for production

npm run build
npm start
```


