import "./About.css"
import { Dithering } from "@paper-design/shaders-react"
import { useNavigate } from "react-router-dom"

export function About() {
    const navigate = useNavigate()
  return (
    <section className="about" id="about">

      <span className="about-label">about</span>
      <div className="about-content">
        <h2 className="about-heading">Why here ? </h2>
        <p className="about-body">
            The place where you can know more about me , my hobbies and what i like  
            jus have a look at the personal website ;-)
        </p>
        <div className="morebtn">
            <button onClick={()=> navigate("/me")}>read More</button>
        </div>
      </div>
    </section>
  )
}