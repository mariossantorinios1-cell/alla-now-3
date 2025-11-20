export default function Home() {
  const posts = [
    {
      id: 1,
      user: "AllNow Official",
      avatar: "https://i.pravatar.cc/150?img=3",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      likes: 154,
      comments: 31,
      description: "Καλώς ήρθατε στο AllNow! 🔥"
    },
    {
      id: 2,
      user: "Gaming World",
      avatar: "https://i.pravatar.cc/150?img=7",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      likes: 412,
      comments: 89,
      description: "TOP gaming moments της ημέρας! 🎮"
    },
    {
      id: 3,
      user: "Travel Live",
      avatar: "https://i.pravatar.cc/150?img=11",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
      likes: 233,
      comments: 54,
      description: "Ζωντανές εικόνες από όλο τον κόσμο! 🌍"
    }
  ];

  return (
    <main className="p-4 max-w-xl mx-auto space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow p-3">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={post.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">{post.user}</span>
          </div>

          <img
            src={post.image}
            alt="post"
            className="w-full rounded-xl object-cover"
          />

          <div className="mt-3">
            <p className="font-semibold">{post.likes} likes ❤️</p>
            <p className="text-sm text-gray-700">{post.description}</p>
            <p className="text-gray-500 text-sm">💬 {post.comments} comments</p>
          </div>
        </div>
      ))}
    </main>
  );
}
