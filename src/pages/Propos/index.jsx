import banner from "../../assets/aboutBanner.png"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import about from '../../data/about.json'

function Propos() {
    return (
        <div className="Propos">
            <Banner img={banner}/>
            <section className="Dropdowm-div">
                {about.map((e) => {
                    return <Collapse collapse={e}/>
                })}
            </section>
        </div>
    )
}

export default Propos