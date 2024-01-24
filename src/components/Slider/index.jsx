import { useEffect, useState } from "react"

function Slider({logement}) {

    const [curentImage, setCurrentImage] = useState (0)
    const [image, setImage] = useState(logement.pictures[curentImage])
    useEffect(() => {
        if (logement.pictures.length > 1) {
            changeImg()
        }
    }, [curentImage])

    return (
        <section className='slider'>

            <div className="sliderImages">
                <img id="sliderImg" src={image} alt={logement.title} />
            </div>

            {logement.pictures.length > 1 && 
            <div>
                <button className="prevArrow arrow" id="prevArrow" onClick={prevImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                </button>

                <button className="nextArrow arrow" id="nextArrow" onClick={nextImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                    </svg>
                </button>
            
                <p className='pagination' id="pagination">{curentImage+1}/{logement.pictures.length}</p>
            </div>}
        </section>
    )

    function changeImg() {
        setImage(logement.pictures[curentImage])
        const txt = document.querySelector('#pagination')
        txt.innerText=curentImage+1+'/'+logement.pictures.length
    }

    function nextImg() {
        if (curentImage === logement.pictures.length-1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(curentImage +1)
        }
    }
    
    function prevImg(){
        if (curentImage === 0) {
            setCurrentImage(logement.pictures.length-1)
        } else {
            setCurrentImage(curentImage -1)
        }
    } 
}

export default Slider