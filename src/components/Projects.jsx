import "./Projects.css"
import { GitBranch } from "lucide-react"
import { SiGithub } from "react-icons/si"

const projects = [
  {
    name: "Portfolio",
    description: "Personal portfolio built with React and vanilla CSS. Features a live shader background, Chess.com and LeetCode stats via public APIs, and a guestbook.",
    tags: ["React", "CSS", "GraphQL"],
    repo: "https://github.com/sreesaicharan/portfolio",
    livedemo:"sai",
  },
  {
    name:"DSA-visualizer",
    description:"The main motive for me to build this is to learn DSA more deep with visuals , can track and dry run every data structure with all necessary details and constrains of the problem",
    tags:["react","css","Framer"],
    repo:"https://github.com/sreesaicharan/ds-visual",
    livedemo:"ds-visual.pages.dev"
  }
]

export function Projects() {
  return (
    <section className="projects" id="projects">
      <span className="projects-label">projects</span>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-top">
              <h3 className="project-name">{project.name}</h3>
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-github">
                <SiGithub />
              </a>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div key = {project.livedemo} className="livedemo">
              <a href={project.livedemo} target="_blank">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}