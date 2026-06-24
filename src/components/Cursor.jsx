import { useEffect, useState } from "react"
import "./Cursor.css"

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  useEffect(() => {
    let frame
    let current = { x: ring.x, y: ring.y }

    const animate = () => {
      current.x += (pos.x - current.x) * 0.1
      current.y += (pos.y - current.y) * 0.1
      setRing({ x: current.x, y: current.y })
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />
    </>
  )
}