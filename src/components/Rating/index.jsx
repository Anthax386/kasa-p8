import orgStar from '../../assets/orgStar.png'
import greyStar from '../../assets/greyStar.png'

function Rating ({rate}) {  
    switch(rate) {
        case '0' : {
            return (
                <div className='rates'>
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                </div>
            )
        }
        case '1': {
            return (
                <div className='rates'>
                    <OrgStar />
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                </div>
            )
        }
        case '2' : {
            return (
                <div className='rates'>
                    <OrgStar />
                    <OrgStar />
                    <GreyStar />
                    <GreyStar />
                    <GreyStar />
                </div>
            )
        }
        case '3' : {
            return (
                <div className='rates'>
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                    <GreyStar />
                    <GreyStar />
                </div>
            )
        }
        case '4' : {
            return (
                <div className='rates'>
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                    <GreyStar />
                </div>
            )
        }
        case '5' :{
            return (
                <div className='rates'>
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                    <OrgStar />
                </div>
            )
        }
        default : {

        }
    }
}

function OrgStar() {
    return (
        <img src={orgStar} alt="orangeStar" />
    )
}
function GreyStar() {
    return (
        <img src={greyStar} alt="greyStar" />
    )
}

export default Rating 