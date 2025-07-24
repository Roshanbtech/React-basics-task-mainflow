import React from 'react'

const Child2 = ({sendMsg}) => {
  return (
    <>
        <h2>Child 2</h2>
        <button onClick={() => sendMsg('Hello from Child 2!')}>Send Message</button>
    </>
  )
}

export default Child2