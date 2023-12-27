import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Styles/main.scss'
import Home from './pages/Home/'
import Header from './components/Header'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'
import Propos from './pages/Propos'
import Footer from './components/Footer'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:idLogement" element={<FicheLogement />} />
                <Route path='/propos' element={<Propos />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)