import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress((scroll / height) * 100)
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: "4px",
      background: "rgba(255, 255, 255, 0.5)",
      zIndex: 9999,
      transition: "width 0.1s ease",
      pointerEvents: "none"
    }} />
  )
}