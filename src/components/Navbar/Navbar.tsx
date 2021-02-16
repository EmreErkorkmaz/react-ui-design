import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.scss";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setIsOpen(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
      showButton();
    })

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar__container"]}>
          <Link to="/" className={styles["navbar__logo"]} onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" style={{marginLeft: "0.5rem", fontSize: "1.8rem"}}/>
          </Link>
          <div className={styles.menu} onClick={() => {setIsOpen(!isOpen)}}>
            <span className={`${styles["menu__burger"]} ${isOpen ? styles.open : null}`} />
          </div>
          <ul className={isOpen ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
            <li className={styles['nav-item']}><Link to='/' className={styles['nav-links']} onClick={closeMobileMenu}>Home</Link></li>
            <li className={styles['nav-item']}><Link to='/services' className={styles['nav-links']} onClick={closeMobileMenu}>Services</Link></li>
            <li className={styles['nav-item']}><Link to='/products' className={styles['nav-links']} onClick={closeMobileMenu}>Products</Link></li>
            <li className={styles['nav-item']}><Link to='/sign-up' className={styles['nav-links-mobile']} onClick={closeMobileMenu}>Sign Up</Link></li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
