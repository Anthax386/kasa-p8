import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logements from '../../data/logements.json'

function Carousel () {

    const { idLogement } = useParams ();
    return (
        <section className='carousel'>
            {logements.map((e) => {
                if(e.id === idLogement) {
                    const logement = e
                    const logementPic = e.pictures
                    return (
                        <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            {/* Slides */}
                            {logementPic.map((pic) =>{
                                return <SwiperSlide><img src={pic} alt={logement.title} /></SwiperSlide>
                            })}
                        </Swiper>
                        
                    )
                }
                return null
            })}
        </section>
    )
    
}

export default Carousel