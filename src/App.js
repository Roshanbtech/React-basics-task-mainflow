import React, { useState } from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'

const App = () => {
  const msg = 'Hello Roshan';

  const [msg2, setMsg2] = useState('');
  const handle = (msg) => setMsg2(msg);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-100 to-blue-50 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 my-6">Parent Component</h1>
      <Child msg={msg} />
      <Child2 sendMsg={handle} />
      <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 w-full max-w-md mx-auto text-center">
        <span className="text-lg font-semibold text-green-700">Message from Child 2:</span>
        <p className="mt-2 text-gray-700">{msg2 || "No message yet."}</p>
      </div>
    </div>
  )
}

export default App;
