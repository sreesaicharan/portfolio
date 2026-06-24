import { useState } from "react"
import { Home, User, FolderOpen, Code2, Mail } from "lucide-react"
import "./NavBar.css"

const items = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: FolderOpen },
  { name: "Skills", url: "#skills", icon: Code2 },
  { name: "Contact", url: "#contact", icon: Mail },
]

export function NavBar() {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span className="nav-label">{item.name}</span>
              <span className="nav-icon">
                <Icon size={22} strokeWidth={2} />
              </span>

              {isActive && <div className="lamp" />}
            </a>
          )
        })}

      </div>
    </nav>
  )
}