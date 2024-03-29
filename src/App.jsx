
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";

function App() {
  const [activeMenu,setActiveMenu]=useState(false)
  return (
    <div className="app">
      <Topbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> 
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div> 
  );
}

export default App;
