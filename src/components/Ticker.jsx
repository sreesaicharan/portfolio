import {motion} from "framer-motion"
import { SiReact, SiJavascript, SiCss, SiPython, SiC } from "react-icons/si"
import { SiBrave } from "react-icons/si"
import { SiGit } from "react-icons/si"
import { SiGithub } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiEclipseide } from "react-icons/si"
import { SiVscodium } from "react-icons/si"
import { SiLeetcode } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import "./Ticker.css"


const icons = [
    {icon:<SiReact/>},
    {icon:<SiJavascript/>},
    {icon:<SiCss/>},
    {icon:<SiPython/>},
    {icon:<SiGit/>},
    {icon:<SiGithub/>},
    {icon:<SiExpress/>},
    {icon:<SiEclipseide/>},
    {icon:<SiVscodium/>},
    {icon:<SiLeetcode/>},
    {icon:<FaJava/>}
]

const doubled = [...icons , ...icons, ...icons ,...icons]

  export function Ticker() {
  return (
    <div className="ticker-outer">
      <div className="ticker-wrap">
        <motion.div
          className="ticker-track"
          animate={{ x: ["0%", "-25%"] }}
          transition={{ duration: 15,
             repeat: Infinity,
              ease: "linear",
            repeat:Infinity,
          repeatType:"loop",
         }}
        >
          {doubled.map((item, i) => (
            <div className="ticker-item" key={i}>
              <span className="ticker-icon">{item.icon}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  )
}
