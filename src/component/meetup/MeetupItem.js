import classes from './MeetupItem.module.css';
import mainImage from '../../images/441877921_1094613234962091_8488114248279730598_n.jpg';
import tempimg from '../../images/9253338.png';
import infoimg from '../../images/449722266_796406682605226_8976681835242525845_n.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MeetupItems(){
   return(
    <div className={classes.main}>
        <div className={classes.background}>
            <img src={mainImage} alt='' />
        </div>
        <header className={classes.icon}>
            <div className={classes.imgs}>
                <FontAwesomeIcon icon="bars" 
                style= {{color: "white", fontSize: "35px", marginTop: "37px"}} 
                />
                 <FontAwesomeIcon icon="gear" 
                style= {{color: "white", fontSize: "35px", marginTop: "37px"}} 
                />
            </div>
        </header>
        <nav className={classes.nav}>
            <div className={classes.back}>
                <img src={infoimg} alt='' />
            </div>
            <div className={classes.info}> 
                <div className={classes.text}>
                    <h3>NEW POST</h3>
                    <p>ROTI SUSU</p>
                </div>
                <div className={classes.time}>
                    <div>
                        <p>June at</p>
                        <p>22 Mai 2020</p>
                    </div>
                    <div>
                        <p>TAP</p>
                        <p>HERE</p>
                    </div>
                </div>
                <div className={classes.temp}>
                    <p>31</p>
                    <img src={tempimg} alt='' />
                </div>
            </div>
        </nav>
    </div>
   )
}

export default MeetupItems