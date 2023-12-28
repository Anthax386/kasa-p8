import { useParams } from 'react-router-dom'

import logements from '../../data/logements.json'

function LogementInfo () {
    const { idLogement } = useParams ();
    return (
        <section>
            {logements.map((e) => {
                if (e.id === idLogement) {
                    const logement = e
                    return (
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
                                    {logement.tags.map((tag) => {
                                        return (<div className='tag'>{tag}</div>)
                                    })}
                                </div>
                                <div className='rates'>
                                    
                                </div>
                            </div>
                            <div className='dropdowns'>
                                <div className='dropdown'>
                                    <div className='dropdown-title' onClick={() => dropdown('description')}>
                                        <p>Description</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" id='description'>
                                            <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                                        </svg> 
                                    </div>
                                    <div className='dropdown-text hidden' id='description-text'>
                                        <p>{logement.description}</p>
                                    </div>
                                </div>
                                <div className='dropdown'>
                                    <div className='dropdown-title' onClick={() => dropdown('equipement')}>
                                        <p>Équipements</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" id='equipement'>
                                            <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                                        </svg> 
                                    </div>
                                    <div className='dropdown-text hidden' id='equipement-text'>
                                        <ul>
                                            {logement.equipments.map((e) => {
                                                return (<li>{e}</li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } return null
            })}
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