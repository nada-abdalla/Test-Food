import classes from './MeetupDrink.module.css';
import './MeetupDrink.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import black from '../../images/403415236_609383971271563_7611736701334239387_n.jpg'
import green from '../../images/449264398_1253386568966401_1510567764962665075_n.jpg'
import lemon from '../../images/366778595_996476148057406_8454709548076750403_n.jpg'
import fruit from '../../images/379656111_702971915026065_9119912609149028284_n.jpg'

function MeetupDrinks(){
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
        <div className={classes.drinks}>
            <FontAwesomeIcon icon="angles-left" style={styleIcon} onClick={handelClick} />
            <header>
                <h2>DRINKS</h2>
                <p>AND OTHERS</p>
            </header>
            <div className={classes.content}>
                <div>
                    <img src={black} alt=''/>
                </div>
                <div>
                    <p>BLACK TEA /</p>
                    <p>1000 w</p>
                </div>
            </div>
            <div className={classes.content}>
                <div>
                    <img src={green} alt=''/>
                </div>
                <div>
                    <p>GREEN TEA /</p>
                    <p>2000 w</p>
                </div>
            </div>
            <div className={classes.content}>
                <div>
                    <img src={lemon} alt=''/>
                </div>
                <div>
                    <p>LEMON TEA /</p>
                    <p>2000 w</p>
                </div>
            </div>
            <div className={classes.content}>
                <div>
                    <img src={fruit} alt=''/>
                </div>
                <div>
                    <p>FRUIT TEA /</p>
                    <p>2500 w</p>
                </div>
            </div>
        </div>
    )
}

export default MeetupDrinks