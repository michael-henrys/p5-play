import React, { useEffect, useRef, useState } from 'react'
import p5 from 'p5'

export default function Canvas () {
  const [size, setSize] = useState(80)
  const [sides, setSides] = useState(3)
  const processingRef = useRef()
  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(500, 500)
    }

    const polygon = (x, y, radius, npoints) => {
      const angle = p.TWO_PI / npoints
      p.beginShape()
      for (let a = 0; a < p.TWO_PI; a += angle) {
        const sx = x + p.cos(a) * radius
        const sy = y + p.sin(a) * radius
        p.vertex(sx, sy)
      }
      p.endShape(p.CLOSE)
    }

    p.draw = () => {
      p.background(220)

      p.push()
      p.translate(p.width * 0.5, p.height * 0.5)
      p.rotate(p.frameCount / 50.0)
      polygon(0, 0, size, sides)
      p.pop()
    }
  }

  useEffect(() => {
    // eslint-disable-next-line new-cap
    const myP5 = new p5(Sketch, processingRef.current)
    return () => myP5.remove()
  })

  return (
    <>
      <label htmlFor="size">Size</label>
      <input type="range" id="size" min="10" max="200" value={size} onChange={(event) => setSize(event.target.value)}></input>
      <label htmlFor="sides">sides: {sides}</label>
      <input type="range" id="sides" min="1" max="30" value={sides} onChange={(event) => setSides(event.target.value)}></input>
      <div ref={processingRef} />
    </>
  )
}
