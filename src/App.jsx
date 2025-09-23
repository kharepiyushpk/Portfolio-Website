import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import { ThemeProvider } from "./components/ThemeProvider"
import ScrollToTop from "./components/ScrollToTop"
import "./styles/global.css"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
