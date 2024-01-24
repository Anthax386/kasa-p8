import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Styles/main.scss'
import Home from './pages/Home/'
import Header from './components/Header'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'
import Propos from './pages/Propos'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:idLogement" element={<FicheLogement />} />
                    <Route path='/propos' element={<Propos />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/404' element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>,
)