function DropDown () {
    const aboutCat = ['Fiabilité', 'Respect', 'Service', 'Sécurité']
    return (
        <div className="Dropdowm-div">
            {aboutCat.map((cat) => {
                return (
                    <div className="dropdown">
                        <p>{cat}</p>
                        <div className="arrow"></div>
                    </div>
                )
            })}
        </div>
    )
}

export default DropDown