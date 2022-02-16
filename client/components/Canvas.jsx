import React, { useEffect, useRef, useState } from 'react'
import p5 from 'p5'

export default function Canvas () {
  const [size, setSize] = useState(100)
  const processingRef = useRef()
  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(500, 500)
    }

    p.draw = () => {
      p.background(220)
      p.ellipse(200, 200, size, size)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line new-cap
    const myP5 = new p5(Sketch, processingRef.current)
    return () => myP5.remove()
  })

  return (
    <>
      <input type="range" min="10" max="150" value={size} onChange={(event) => setSize(event.target.value)}></input>
      <div ref={processingRef} />
    </>
  )
}
