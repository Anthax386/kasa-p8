import OrangeStar from "./OrangeStar"
import GreyStar from "./GreyStar"


function Rating ({rate}) {
    return(
    <div className='rates'>
        {[1,2,3,4,5].map((e) => 
            e <= rate ? <div key={e}><OrangeStar /></div> : <div key={e}><GreyStar /></div>
        )}
    </div>
    )   
}

export default Rating