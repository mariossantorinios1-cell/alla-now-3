"use client";

export default function Home() {
  // Dummy videos (προσωρινά – θα τα κάνουμε dynamic)
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
    <div style={{
      padding: "80px 20px 20px 240px",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#fff"
    }}>
      
      <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>Recommended</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "20px"
      }}>
        {videos.map((video, index) => (
          <div key={index} style={{
            background: "#111",
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "0.2s"
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={video.thumbnail}
              alt="thumbnail"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <div style={{ padding: "12px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "6px" }}>
                {video.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa" }}>{video.views}</p>
              <p style={{ fontSize: "13px", color: "#777" }}>{video.author}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
