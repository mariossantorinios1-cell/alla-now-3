export default function ChatBox(){ 
  return (
    <div className="border border-gray-700 p-3 rounded bg-gray-800">
      <div className="h-40 overflow-auto mb-2">Chat messages (connect to realtime DB)</div>
      <input placeholder="Type a message" className="w-full p-2 bg-gray-900 rounded"/>
    </div>
  )
}
