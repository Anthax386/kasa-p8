import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
 
function Header() {
    return (
        <div className='Header-div'>
            <header>
                <img src={logo} alt="logo" />
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/propos">A Propos</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header