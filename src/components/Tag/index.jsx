function Tag ({tag, index}) {
    return (
        <div key={index} className='tag'><p>{tag}</p></div>
    )
}

export default Tag