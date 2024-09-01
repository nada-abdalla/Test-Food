import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import classes from './MeetupMusic.module.css';
import './MeetupMusic.module.css';

function MeetupMusic(){
    const [color, setColor] = useState('');
    const handleClick = (color) =>{
        setColor(color)
    }
    const styleIcon = {
        color: "white",
        fontSIZE: "21PX",
        position: "relative",
        top: "46px",
        left: "20px",
        backgroundColor: "burlywood",
        zIndex: "40"
    }
    const navigate = useNavigate()
    const handelClick = () => {
        navigate('/')
    }
    return(
        <div className={classes.img}>
            <FontAwesomeIcon icon="angles-left" style={styleIcon} onClick={handelClick} />
            <div className={classes.music}>
                <p>Tell Us Your Favorite Song</p>
                <input style={{borderColor: color}} onClick={() =>{handleClick('burlywood')}}></input>
            </div>
        </div>
    )
}

export default MeetupMusic