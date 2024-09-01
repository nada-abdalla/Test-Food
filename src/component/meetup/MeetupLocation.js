import './MeetupLocation.module.css';
import classes from './MeetupLocation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import img from '../../images/451497424_908443877578490_4139898749289037188_n.jpg'
import face from '../../images/20837.png'
import insta from '../../images/1400829.png'

function MeetupLocation(){
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
        <div className={classes.location}>
            <FontAwesomeIcon icon="angles-left" style={styleIcon} onClick={handelClick} />
            <header>
                <div className={classes.social}>
                    <p>Follow Us</p>
                    <div className={classes.imgs}>
                        <div>
                            <img src={face} alt=''/>
                        </div>
                        <div>
                            <img src={insta} alt=''/>
                        </div>
                    </div>
                </div>
            </header>
            <div className={classes.text}>
                <div className={classes.content}>
                    <div className={classes.wone}>
                        <p>LIFE IS DULL</p>
                        <p className={classes.yellowp}>WITHOUT</p>
                    </div>
                    <div className={classes.yellow}>
                        <p>G</p>
                        <p>D</p>
                    </div>
                    <div className={classes.white}>
                        <p>F</p>
                        <p>D</p>
                    </div>
                </div>
                <div className={classes.img}>
                    <img src={img} alt='' />
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.phone}>
                    <p>+91 7030 105 494</p>
                    <p>BSNL CHOWK,NEAR GUJAR GAS MIDC</p>
                </div>
                <div className={classes.textf}>
                    <p>
                        We are aiso Avilable on
                    </p>
                    <div>Zomato</div>
                    <div>swiggy</div>
                </div>
            </div>
        </div>
    )
}

export default MeetupLocation