import React from 'react';
//style-sheets
import styles from "./css/navbar.module.css";
//redux
import { useSelector } from 'react-redux';
//react-router-dom
import { Link } from 'react-router-dom';


import cart from "./shop.svg"
const Navbar = () => {
    const State =useSelector(state=>state.cartShoppingState);
    return (
        <div className={styles.Navbar}>
           <Link className={styles.Product} to="/"><h3>Product</h3></Link>
            <div>
                <Link to="/shoppingCart"><img className={styles.icon} src={cart} alt="icon"  /></Link>
                <span className={styles.counter}>{State.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;