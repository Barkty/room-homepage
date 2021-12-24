import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Navbar.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState("Home");
    const handleActive = (menu) => {
    setActive(menu);
  };

    return (
        <div className={`${styles.navbar__wrapper}`}>
            <div className='container'>
                <nav className={`${styles.navbar}`}>
                    <div className={`${styles.logo}`}>
                        <Link to="/"><Logo /></Link>
                    </div>
                    <ul className={isMobile ? `${styles.nav_links_mobile}` : `${styles.nav_links}`} onClick={() => setIsMobile(false)}>
                        <li className={`${styles.nav_link} ${active === "Home" ? styles.active : ""}`} onClick={() => { handleActive("Home");}}>
                        <Link to="/">Home</Link>
                        </li>
                        <li className={`${styles.nav_link} ${ active === "Shop" ? styles.active : ""}`}  onClick={() => {handleActive("Shop");}}>
                        <Link to="/shop" className="blog">
                            Shop
                        </Link>
                        </li>
                        <li className={`${styles.nav_link} ${ active === "About" ? styles.active : ""}`}  onClick={() => {handleActive("About");}}>
                        <Link to="/about" className="blog">
                            About
                        </Link>
                        </li>
                        <li className={`${styles.nav_link} ${ active === "Contact" ? styles.active : ""}`}  onClick={() => {handleActive("Contact");}}>
                        <Link to="/contact" className="blog">
                            Contact
                        </Link>
                        </li>
                    </ul>
                    <button className={`${styles.mobile_menu_icon}`} onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile ? ( <FontAwesomeIcon icon={["fas", "times"]} className={`${styles.mobile_icon__t}`}/>) : ( <FontAwesomeIcon icon={["fas", "bars"]} className={`${styles.mobile_icon}`}/>)}
                  </button>
                </nav>
            </div>
        </div>
    )
}
export default Navbar;