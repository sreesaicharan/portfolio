import { Dithering } from "@paper-design/shaders-react"
import { ChessCard, LeetCodeCard } from "../components/StatsGrid"
import { Cursor } from "../components/Cursor"
import { useNavigate } from "react-router-dom"
import "./Me.css"

export default function Me() {
  const navigate = useNavigate()

  return (
    <div className="me-wrapper">
      <Cursor />
      <Dithering
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
        colorBack="#000000"
        colorFront="#3f3f3f"
        shape="sphere"
        type="4x4"
        size={2}
        speed={1}
        scale={0.6}
      />

      <button className="me-back" onClick={() => navigate("/")}>
        ← back
      </button>

      <div className="me-content">
        <h1 className="me-heading">About Me</h1>

        <p className="me-para">
          I'm an 18 year old CS student at Amrita Vishwa Vidyapeetam doing my undergrad,
          recently got interest towards web dev.
        </p>

        <p className="me-para">
          Haven't done much projects till now, but will keep updating my project section
          after building some cool stuff.
        </p>

        <p className="me-para">
          My hobbies are playing cricket, badminton, and I play a lot of chess during
          free time. I also love doing DSA — listed some stats below.
        </p>

        <div className="me-section">
          <span className="me-label chess-label">chess</span>
          <p className="me-para">
            Started playing chess in 2017, been playing online for 5 years. I don't play
            much blitz or bullet — trying to reach 1k rapid. Come back, you might see it.
            Want to play? <a href="https://www.chess.com/member/saicharan2723" target="_blank" rel="noreferrer">♞</a>
          </p>
          <ChessCard />
        </div>

        <div className="me-section">
          <span className="me-label leetcode-label">leetcode</span>
          <p className="me-para">
            Started LeetCode recently. I genuinely don't do it for jobs —
            just solve some problems daily when I can.
          </p>
          <LeetCodeCard />
        </div>
      </div>
    </div>
  )
}