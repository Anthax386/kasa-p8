import Banner from "../../components/Banner";
import LogementCards from "../../components/Cards";
import banner from '../../assets/homeBanner.png'

const title = 'Chez vous, partout et ailleurs'

function Home() {
  return (
    <div className="home">
        <Banner img={banner} title = {title}/>
        <LogementCards />
    </div>
  );
}

export default Home;