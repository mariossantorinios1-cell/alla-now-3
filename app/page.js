export default function Home() {
  const videos = [
    {
      id: 1,
      title: "Epic Gameplay Highlights",
      views: "1.2M views",
      thumbnail: "https://picsum.photos/500/300?random=1",
    },
    {
      id: 2,
      title: "Top 10 Fails of the Week",
      views: "845K views",
      thumbnail: "https://picsum.photos/500/300?random=2",
    },
    {
      id: 3,
      title: "Live: Pro Tournament",
      views: "LIVE NOW",
      thumbnail: "https://picsum.photos/500/300?random=3",
    },
    {
      id: 4,
      title: "New Game Review",
      views: "420K views",
      thumbnail: "https://picsum.photos/500/300?random=4",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
            transition: "0.2s",
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
  );
}
