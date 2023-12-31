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
                    <Rating  rate = {logement.rating}/>
                </div>
                <Collapse collapses={collapses}/>
            </div>
                    
        </section>
    )
}

let descriptionIsOpen = false
let equipementIsOpen = false

function dropdown(e) {
    const arrow = document.querySelector('#'+e)
    const text = document.querySelector('#'+e+'-text')
    
    function showText() {
        arrow.style.animation='arrowDown 100ms ease-in-out forwards'
        text.style.animation='showText 100ms ease-in-out forwards'
        text.classList.remove('hidden')
    }
    function hideText() {
        arrow.style.animation='arrowUp 100ms ease-in-out forwards'
        text.style.animation='hideText 100ms ease-in-out forwards'
        text.classList.add('hidden')
    }
    
    switch (e) {
        case 'equipement' : {
            console.log(text)
            switch (equipementIsOpen) {
                case false : {
                    showText()
                    equipementIsOpen = true
                    break
                }
                case true : {
                    hideText()
                    equipementIsOpen = false
                    break
                }
                default : {
                    break
                }
            }
            break       
        }
        case 'description' : {
            console.log(text)
            switch (descriptionIsOpen) {
                case false : {
                    showText()
                    descriptionIsOpen = true
                    break
                }
                case true : {
                    hideText();
                    descriptionIsOpen = false
                    break
                }
                default : {
                    break
                }
            }
            break
        }
        default : {
            break
        }
    }
}

export default LogementInfo