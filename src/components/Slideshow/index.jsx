import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logements from '../../data/logements.json'

function Slideshow () {
    const { idLogement } = useParams ();
    let logement
    logements.map((e) => {
        if(e.id === idLogement) {
            logement = e
        }
        return logement
    })
    return (
        <section className='slideshow'>
            <Swiper 
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                >
                {/* Slides */}
                {logement.pictures.map((pic, index) =>{
                    return <SwiperSlide><img key={index} src={pic} alt={logement.title} /></SwiperSlide>
                })}
            </Swiper>
        </section>
    )
}

export default Slideshow