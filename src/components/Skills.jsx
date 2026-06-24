import { useRef, useEffect } from "react"
import "./Skills.css"

import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiExpress,
  SiC,
  SiGit,
  SiGithub,
  SiEclipseide,
  SiSupabase
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <SiC /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git", icon: <SiGit /> },
    ]
  }
]

export function Skills() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleWheel = (e) => {
      const atStart = el.scrollLeft <= 0
      const atEnd =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - 2

      if (
        (e.deltaY > 0 && !atEnd) ||
        (e.deltaY < 0 && !atStart)
      ) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener("wheel", handleWheel, {
      passive: false,
    })

    return () => {
      el.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollLeft += direction * 300
  }

  return (
    <section className="skills-wrapper" id="skills">
      <div className="skills">

        <div className="skills-header">
          <span className="skills-label">skills</span>

          <div className="skills-nav">
          
       
          </div>
        </div>

        <div className="skills-scroll" ref={scrollRef}>
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3 className="skill-card-title">
                {group.title}
              </h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                  >
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}