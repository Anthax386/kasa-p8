import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'

function LogementCards () {
    return (
        <section className='logements-section'>
            {logements.map((logement) => {
                return (
                    <article key={logement.id} className='logement-card'>
                        <Link to={`/logement/${logement.id}`} className='logement-card-link'/>
                        <img src={logement.cover} alt={logement.title} />
                        <p>{logement.title}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default LogementCards