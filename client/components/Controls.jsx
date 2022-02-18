import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePolygon } from '../polygonsSlice'

export default function Controls ({ index }) {
  const dispatch = useDispatch()
  const [size, setSize] = useState(80)
  const [sides, setSides] = useState(3)
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    dispatch(updatePolygon({ index, size, sides, speed }))
  }, [size, sides, speed])

  return (
    <div className='controls'>
      <label htmlFor="size">size</label>
      <input type="range" id="size" min="10" max="200" value={size} onChange={(event) => setSize(event.target.value)}></input>
      <label htmlFor="sides">sides: {sides}</label>
      <input type="range" id="sides" min="1" max="20" value={sides} onChange={(event) => setSides(event.target.value)}></input>
      <label htmlFor="speed">speed</label>
      <input type="range" id="sides" min="1" max="20" value={speed} onChange={(event) => setSpeed(event.target.value)}></input>
    </div>
  )
}
