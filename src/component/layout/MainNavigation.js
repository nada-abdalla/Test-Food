import './MainNavigation.module.css';
import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

import feedback from '../../images/798711.png';
import home from '../../images/845022.png';
import location from '../../images/3177262.png';
import drinkfood from '../../images/6073150.png';
import music from '../../images/6707113.png'

function MainNavigation(){
    return(
    <div className={classes.navigation} >
        <div>
            <div className={classes.feedback}>
                <Link to='/feed back' className={classes.Link}>
                    <img src={feedback} alt='' />
                </Link>
                <p>FoodMenu</p>
            </div>
            <div className={classes.home}>
                <Link to='/home' className={classes.Link}>
                    <img src={home} alt='' />
                </Link>
                <p>HOME</p>
            </div>
            <div className={classes.location}>
                <Link to='/location' className={classes.Link}>
                    <img src={location} alt='' />
                </Link>
                <p>LOCATION</p>
            </div>
            <div className={classes.drinkfood}>
                <Link to='/drinkfood' className={classes.Link}>
                    <img src={drinkfood} alt='' />
                </Link>
                <p>DRINKFOOD</p>
            </div>
            <div className={classes.music}>
                <Link to='/music' className={classes.Link}>
                    <img src={music} alt='' />
                </Link>
                <p>MUSIC</p>
            </div>
        </div>
    </div>
    )
}

export default MainNavigation