import React from 'react'
import Sketch from 'react-p5'
import { useDispatch, useSelector } from 'react-redux'
import { addPolygon } from '../polygonsSlice'
import Controls from './Controls'

export default function Canvas () {
  const dispatch = useDispatch()

  const setup = (p) => {
    p.createCanvas(500, 500)
  }

  const polygons = useSelector(state => state.polygons)

  const drawPolygon = (p, x, y, radius, npoints) => {
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
    p.background(255)
    p.noFill()

    polygons && polygons.forEach(polygon => {
      p.push()
      p.translate(p.width * 0.5, p.height * 0.5)
      p.rotate(p.frameCount / (300 / polygon.speed))
      drawPolygon(p, 0, 0, polygon.size, polygon.sides)
      p.pop()
    })
  }

  return (
    <>
      <Sketch setup={setup} draw={draw}/>
      <button onClick={() => dispatch(addPolygon())}>Add Polygon</button>
      {
        polygons && polygons.map((polygon, index) => {
          return (
            <Controls key={index} index={index}/>
          )
        })
      }
    </>
  )
}
