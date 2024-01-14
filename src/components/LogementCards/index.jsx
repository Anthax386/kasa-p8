import { Link } from 'react-router-dom'

function LogementCards ({logement}) {
    return (
        <article key={logement.id} className='logement-card'>
            <Link to={`/logement/${logement.id}`} className='logement-card-link'/>
                <img src={logement.cover} alt={logement.title} />
                <p>{logement.title}</p>
        </article>
    )
}

export default LogementCards