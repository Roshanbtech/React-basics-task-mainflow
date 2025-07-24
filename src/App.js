import React,{useState} from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'


const App = () => {
  const msg = 'Hello Roshan';

  const [msg2, setMsg2] = useState('');
  const handle = (msg) => setMsg2(msg);
  
  return (
    <>
     <h1>Parent</h1>
     <Child msg={msg} />
     <Child2 sendMsg={handle} />
     <p>message from child2:{msg2}</p>
    </>
  )
}

export default App