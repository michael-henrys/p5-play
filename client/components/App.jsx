import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
