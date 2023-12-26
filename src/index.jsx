import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header'
import Error from './components/Error'
import FicheLogement from './pages/FicheLogement'
import Propos from './pages/Propos'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/FicheLogement' element={<FicheLogement />}/>
                <Route path='/propos' element={<Propos />} />
                <Route path='*' element={<Error />} />
            </Routes>
                  </Router>
    </React.StrictMode>,
document.getElementById('root')
)