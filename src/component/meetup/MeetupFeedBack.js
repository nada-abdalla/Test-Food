import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MeetupFeedBack.module.css';
import { Link } from 'react-router-dom';
import './MeetupFeedBack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../../images/450441890_842192697811386_5936193688468772560_n.jpg';
import img11 from '../../images/450441890_842192697811386_5936193688468772560_n.jpg';
import img3 from '../../images/450019745_1028959745241625_5323945303727582898_n.jpg';
import img4 from'../../images/451455909_1008766607060173_2735040508974516646_n.jpg';
import img5 from '../../images/451096104_489053350473113_2583492619819153931_n.jpg';

import img2 from '../../images/362214799_182078038043180_4805293852651675829_n.jpg';
import img22 from '../../images/362214799_182078038043180_4805293852651675829_n.jpg';
import img6 from '../../images/453778414_1847538372399598_7531851162159704814_n.jpg';
import img7 from '../../images/453776127_1013720439967670_2068051311036214707_n.jpg';
import img8 from '../../images/452282812_1609910522912082_1045512101060515384_n.jpg';


function MeetupFoodMenu(){
    const  [img, setImg1] = useState(img1);
    const [imgs , setImgs] = useState(img2);
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
        <div className={classes.feedback}>
            <FontAwesomeIcon icon="angles-left" style={styleIcon} onClick={handelClick} />
            <div className={classes.maindishes}>
                <h2>FOOD MENU</h2>
                <div className={classes.edit}>
                    <div className={classes.img}>
                        <img src= {img} alt=' ' />
                    </div>
                    <div className={classes.content}>
                        <h3>Main Dishes</h3>
                        <div>
                            <p><Link className='link' onClick={ () => setImg1(img11)}>Garlic chicken and Asparagus</Link></p>
                            <p><Link className='link' onClick={() => {
                                setImg1(img3)
                            }}>Firecracker Chicken Recipe</Link></p>
                            <p><Link className='link' onClick={() => {
                                setImg1(img4)
                            }}>Peruvain Grilled Chicken</Link></p>
                            <p><Link className='link' onClick={() => {
                                setImg1(img5)
                            }}>Bavette steak</Link></p>
                        </div>
                    </div>
                </div>
                <div className={classes.edit2}>
                    <div className={classes.content2}>
                        <h3>Salads</h3>
                        <div>
                            <p><Link onClick={() => {setImgs(img22)}}>Ranch Chicken Salad</Link></p>
                            <p><Link onClick={() => {setImgs(img6)}}>steak Rice Bowls</Link></p>
                            <p><Link onClick={() => {setImgs(img7)}}>Grilled Chicken Burrito</Link></p>
                            <p><Link onClick={() => {setImgs(img8)}}>Chipotle Checken Bowl</Link></p>
                        </div>
                    </div>
                    <div className={classes.img2}>
                        <img src={imgs} alt=' ' />
                    </div>
                </div>
            </div>  
        </div>
    )

}


export default MeetupFoodMenu