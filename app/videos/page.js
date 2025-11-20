export default function VideosPage() {
  const categories = [
    "Trending",
    "Gaming",
    "Live",
    "Music",
    "Sports",
    "News",
    "Movies",
    "Technology",
    "AI",
  ];

  const videos = [
    {
      id: 1,
      title: "INSANE Gameplay 2025",
      views: "2.1M views",
      thumbnail: "https://picsum.photos/500/300?random=10",
    },
    {
      id: 2,
      title: "LIVE Tournament Finals",
      views: "LIVE NOW",
      thumbnail: "https://picsum.photos/500/300?random=11",
    },
    {
      id: 3,
      title: "Top 50 Music Hits",
      views: "893K views",
      thumbnail: "https://picsum.photos/500/300?random=12",
    },
    {
      id: 4,
      title: "AI Changed Everything",
      views: "1.4M views",
      thumbnail: "https://picsum.photos/500/300?random=13",
    },
    {
      id: 5,
      title: "Most Viral Clips",
      views: "732K views",
      thumbnail: "https://picsum.photos/500/300?random=14",
    },
  ];

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      {/* CATEGORIES */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "12px",
          marginBottom: "20px",
          paddingBottom: "8px",
        }}
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              padding: "8px 16px",
              background: "#222",
              borderRadius: "20px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* VIDEO GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              backgroundColor: "#111",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: "100%", height: "auto" }}
            />

            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: 0, fontSize: "18px" }}>{video.title}</h3>
              <p style={{ margin: 0, color: "#aaa", fontSize: "14px" }}>
                {video.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
