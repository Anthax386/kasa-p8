import { Link } from 'react-router-dom'

function LogementCards ({logement}) {
    return (
        <article key={logement.id} className='logement-card'>
            <Link to={`/logement/${logement.id}`} className='logement-card-link'>
                <img src={logement.cover} alt={logement.title} />
                <span></span>
                <p>{logement.title}</p>
            </Link>
                
        </article>
    )
}

export default LogementCards