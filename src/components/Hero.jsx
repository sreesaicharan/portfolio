import "./Hero.css"
import myPhoto from "../assets/photo.jpg"

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hi I'm</span>
          <h1 className="hero-name">Sai Charan</h1>
          <div className="hero-tagline">
            <p>Build cool and helpful websites</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}