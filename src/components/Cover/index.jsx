import cover from '../../assets/homeBanner.png'

function Cover () {
    return (       
        <div className='cover'>
            <img src={cover} alt="Chez vous, partout ailleurs" />
            <h1>Chez vous, partout ailleurs</h1>
        </div>  
    )
}

export default Cover