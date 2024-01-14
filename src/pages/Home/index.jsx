import Banner from "../../components/Banner";
import LogementCards from "../../components/LogementCards";
import banner from '../../assets/homeBanner.png'
import logements from '../../data/logements.json'

const title = 'Chez vous, partout et ailleurs'

function Home() {
  return (
    <div className="home">
        <Banner img={banner} title = {title}/>
        <section className='logements-section'>
          {logements.map((e) => {
            return <LogementCards logement ={e}/>
          })}
        </section>
    </div>
  );
}

export default Home;