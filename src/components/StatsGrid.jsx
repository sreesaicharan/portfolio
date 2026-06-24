import { useEffect, useState } from "react"
import "./StatsGrid.css"

export function LeetCodeCard() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/7KXBCAHrAX")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(() => setError(true))
  }, [])

  return (
    <div className="stat-card">
      <span className="stat-card-label leetcode-label">leetcode</span>
      {error && <p className="stat-error">unavailable</p>}
      {!data && !error && <p className="stat-loading">loading...</p>}
      {data && (
        <div className="stat-card-content">
          <div className="stat-main">
            <span className="stat-big">{data.totalSolved}</span>
            <span className="stat-sub">/ {data.totalQuestions} solved</span>
          </div>
          <div className="stat-row">
            <span className="stat-tag easy">easy {data.easySolved}</span>
            <span className="stat-tag medium">med {data.mediumSolved}</span>
            <span className="stat-tag hard">hard {data.hardSolved}</span>
          </div>
          <div className="stat-detail">
            <span className="detail-label">ranking</span>
            <span className="detail-value">#{data.ranking?.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export function ChessCard() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://api.chess.com/pub/player/saicharan2723/stats")
      .then(res => res.json())
      .then(setData)
      .catch(() => setError(true))
  }, [])

  const rapid = data?.chess_rapid?.last
  const blitz = data?.chess_blitz?.last
  const bullet = data?.chess_bullet?.last

  return (
    <div className="stat-card">
      <span className="stat-card-label chess-label">chess.com</span>
      {error && <p className="stat-error">unavailable</p>}
      {!data && !error && <p className="stat-loading">loading...</p>}
      {data && (
        <div className="stat-card-content">
          {rapid && (
            <div className="stat-main">
              <span className="stat-big">{rapid.rating}</span>
              <span className="stat-sub">rapid rating</span>
            </div>
          )}
          <div className="stat-row">
            {blitz && <span className="stat-tag">blitz {blitz.rating}</span>}
            {bullet && <span className="stat-tag">bullet {bullet.rating}</span>}
          </div>
          {rapid && (
            <div className="stat-detail">
              <span className="detail-label">rapid record</span>
              <span className="detail-value">
                {rapid.win}W {rapid.loss}L {rapid.draw}D
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function StatsGrid() {
  return (
    <div className="stats-grid">
      <LeetCodeCard />
      <ChessCard />
    </div>
  )
}