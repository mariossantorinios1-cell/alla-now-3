"use client";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThreeHero from "./components/ThreeHero";

export default function Home() {
  // Dummy videos (προσωρινά)
  const videos = [
    {
      title: "Amazing Gameplay Moments",
      views: "1.2M views",
      thumbnail: "https://images.unsplash.com/photo-1606813902914-9e5d1be7f3f2",
      author: "Gaming World"
    },
    {
      title: "AI Will Change Everything",
      views: "890K views",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      author: "Tech Insider"
    },
    {
      title: "Top 10 Fails of the Week",
      views: "2.4M views",
      thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      author: "FunTube"
    },
    {
      title: "Most Beautiful Places on Earth",
      views: "1.8M views",
      thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      author: "TravelNow"
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <Navbar />

      <div style={{ display: "flex", paddingTop: 80 }}>
        <Sidebar />

        <main style={{ flex: 1, padding: "24px 40px" }}>
          {/* 3D Hero */}
          <ThreeHero />

          {/* Feed */}
          <section style={{ marginTop: 28 }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>Recommended</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20
            }}>
              {videos.map((v, i) => (
                <article key={i} style={{
                  background: "#0f0f0f",
                  borderRadius: 12,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform .18s"
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0px)"}
                >
                  <img src={v.thumbnail} alt={v.title} style={{ width: "100%", height: 150, objectFit: "cover" }} />
                  <div style={{ padding: 12 }}>
                    <h3 style={{ margin: 0, fontSize: 15 }}>{v.title}</h3>
                    <p style={{ marginTop: 6, color: "#aaa", fontSize: 13 }}>{v.views} • {v.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
