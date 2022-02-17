import React, { useState } from 'react'
import Sketch from 'react-p5'

export default function Canvas () {
  const [size, setSize] = useState(80)
  const [sides, setSides] = useState(3)

  const setup = (p) => {
    p.createCanvas(500, 500)
  }

  const polygon = (p, x, y, radius, npoints) => {
    const angle = p.TWO_PI / npoints
    p.beginShape()
    for (let a = 0; a < p.TWO_PI; a += angle) {
      const sx = x + p.cos(a) * radius
      const sy = y + p.sin(a) * radius
      p.vertex(sx, sy)
    }
    p.endShape(p.CLOSE)
  }

  const draw = (p) => {
    p.background(220)

    p.push()
    p.translate(p.width * 0.5, p.height * 0.5)
    p.rotate(p.frameCount / 50.0)
    polygon(p, 0, 0, size, sides)
    p.pop()
  }

  return (
    <>
      <label htmlFor="size">Size</label>
      <input type="range" id="size" min="10" max="200" value={size} onChange={(event) => setSize(event.target.value)}></input>
      <label htmlFor="sides">sides: {sides}</label>
      <input type="range" id="sides" min="1" max="30" value={sides} onChange={(event) => setSides(event.target.value)}></input>
      <Sketch setup={setup} draw={draw}/>
    </>
  )
}
