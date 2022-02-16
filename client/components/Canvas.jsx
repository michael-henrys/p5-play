import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Canvas () {
  const processingRef = useRef()
  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(400, 400)
    }

    p.draw = () => {
      p.background(220)
      p.ellipse(p.mouseX, p.mouseY, 80, 80)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars, new-cap
    const myP5 = new p5(Sketch, processingRef.current)
  }, [])

  return (
    <div ref={processingRef} />
  )
}
