import { NavLink } from 'react-router-dom';
import s from'../styles/Nav.module.css'


const Navbar = () =>{
    return(
        <div>
            <nav className={s.Nav}>
            <ul className={s.Lista}>
                <li>
                    <NavLink to='/'> Inicio </NavLink>
                </li>
                
                <li>
                    <NavLink to='/paquetes' > Paquetes </NavLink>
                </li>

                <li>
                    <NavLink to='/buses' > Nuestros Buses </NavLink>
                </li>

                <li>
                    <NavLink to='/citytour' > City Tour </NavLink>
                </li>

                <li>
                    <NavLink to='/lugares' > Lugares </NavLink>
                </li>

                <li>
                    <NavLink to='/quienesSomos' > Quienes Somos </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}


export default Navbar;