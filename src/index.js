import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home, About, Portfolio} from "./components"

import './style.css'; 

const App = () => {
    return (
        <BrowserRouter>
            
            <section>
                <nav id="navButton">
                    <Link to="/"> Home </Link>

                    <Link to="/about"> About</Link>

                    <Link to="/portfolio"> Portfolio </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                </Routes>

            </section>
        </BrowserRouter>
        
    )
}







let appElement = document.getElementById("app")
let root = createRoot (appElement)
root.render(<App/>)