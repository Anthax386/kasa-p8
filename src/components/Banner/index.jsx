function Banner ({img, title}) {
    return (
        <div className='cover'>
            <img src={img} alt='Kasa' id='BannerImg'/>
            {title && <h1 id='BannerTitle'>{title}</h1>}
        </div>
    )
}

export default Banner