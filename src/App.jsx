import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ScrollProgress } from "./components/ScrollProgress"
import { Cursor } from "./components/Cursor"
import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Guestbook } from "./components/Guestbook"
import { MeshGradient } from "@paper-design/shaders-react"
import { Ticker } from "./components/Ticker"
import { Footer } from "./components/Footer"
import Me from "./pages/Me"

export function Portfolio() {
  return (
   
  <div style={{ width: "100%", minHeight: "100vh", background: "#000", position: "relative" }}>
    <MeshGradient
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
      colors={["#000000", "#1a1a1a", "#333333", "#ffffff78"]}
      speed={1.0}
      backgroundColor="#000000"
    />
    <ScrollProgress />
    <Cursor />
    <NavBar />
    <Hero />
    <Ticker />
    <About />
    <Projects />
    <Skills />
    <Guestbook />
    <Footer />
  </div>

  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  )
}