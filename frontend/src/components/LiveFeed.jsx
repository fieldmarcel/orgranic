import React from 'react'

const LiveFeed = () => {
 
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🍲 Community Feed</h2>
      <textarea
        
    
        placeholder="Share your food thoughts..."
        className="w-full p-2 border"
      />
      <button  className="bg-green-500 text-white px-4 py-2 mt-2">
        Post
      </button>

      <ul className="mt-4 space-y-2">
        
          <li className="border p-2">
            <strong>cfghjgfjh</strong>:"jgjgjhjh"
          </li>
        
      </ul>
    </div>
  );
}

export default LiveFeed