import { NavLink } from 'react-router-dom';
import s from '../styles/Details.module.css'


//images

import mercedes from '../images/mercedes.jpg'

const Card = ( {title, img} ) => {
    return (
        <div>
            <div className={s.Card}>

            <img src={img} className={s.img1} />
            <p> {title} </p>
            <NavLink to='/detalles'> Mas informacion </NavLink> 
            </div>
        </div>
    )
}


export default Card;