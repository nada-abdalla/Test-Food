import './MeetupHome.module.css'
import classes from './MeetupHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


import leaf from '../../images/547889.png'
import img from '../../images/448451115_7926760984049091_4897389024796200718_n (1).jpg'
import backg from '../../images/398170911_720434349651463_8066112888712939949_n.jpg'

function MeetupHome(){
    const styleIcon = {
        color: "white",
        fontSIZE: "21PX",
        position: "relative",
        top: "46px",
        left: "20px",
        backgroundColor: "ORANGE",
        zIndex: "40"
    }
    const navigate = useNavigate()
    const handelClick = () => {
        navigate('/')
    }
    return(
        <div className={classes.home}>
            <FontAwesomeIcon icon="angles-left" style={styleIcon} onClick={handelClick} />
            <img src={backg} alt='' className={classes.back} />
            <div className={classes.containe}>
                <div className={classes.text}>
                    <img src={leaf} alt='' className={classes.leaf} />
                    <h3>TASTE</h3>
                    <p>THE</p>
                    <p>BEST</p>
                    <p>FROM</p>
                    <p>THE</p>
                    <p>BEST</p>
                </div>
                <div className={classes.img}>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>
    )
}

export default MeetupHome