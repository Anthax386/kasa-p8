import Slideshow from "../../components/Slideshow"
import LogementInfo from "../../components/LogementInfo"
import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import { Navigate } from "react-router-dom"

function FicheLogement () {

    const { idLogement } = useParams ();

    const logement = logements.find(
        logement => logement.id === idLogement
    );

    if (logement) {
        return (
            <div className="ficheLogement">
                <Slideshow />
                <LogementInfo collapse = {logement} logement = {logement}/> 
            </div>
        )
    } else {
        return <Navigate to="/404" />
    }
}

export default FicheLogement