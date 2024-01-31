import Collapse from '../Collapse';
import Rating from '../Rating';
import Tag from '../Tag';

function LogementInfo ({logement}) {
    
    const collapses = [
        {
            'name' : 'Description',
            'txt' : logement.description
        },
        {
            'name' : 'Equipements',
            'txt': logement.equipments
        }
    ]

    const rate = parseFloat(logement.rating);
    
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
                            return <div key={index}><Tag tag = {tag} index ={index}/></div>
                        })}
                    </div>
                    <div className="rating">
                        <Rating rate = {rate} />
                    </div>
                </div>
                <section className="Dropdowm-div">
                    {collapses.map((e, index) => {
                        return <article key={index} className='dropdown'><Collapse collapse={e}/></article>
                    })}
                </section>
                
                
            </div>
                    
        </section>
    )
}

export default LogementInfo