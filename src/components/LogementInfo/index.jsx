import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Collapse from '../Collapse';
import Rating from '../Rating';

function LogementInfo () {
    const { idLogement } = useParams ();
    let logement
    logements.map((e) => {
        if(e.id === idLogement) {
            logement = e
        }
        return logement
    })

    const collapses = [
        {
            'name' : 'Description',
            'txt' : logement.description,
            'isOpen': false
        },
        {
            'name' : 'Équipements',
            'txt': logement.equipments,
            'isOpen': false
        }
    ]
    
    return (
        <section>    
            <div className='logement-infos'>
                <div className='logement'>
                    <div className='logement-title'>   
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <div className='logement-hote'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                </div>
                <div className='tags-rates'>
                    <div className='tags'>
                        {logement.tags.map((tag, index) => {
                            return (<div key={index} className='tag'>{tag}</div>)
                        })}
                    </div>
                    <Rating rate = {logement.rating}/>
                </div>
                <Collapse collapses={collapses}/>
            </div>
                    
        </section>
    )
}

export default LogementInfo