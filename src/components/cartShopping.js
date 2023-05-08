import React from 'react';
//redux
import { useSelector,useDispatch } from 'react-redux';
//icons
import Cart from './shared/cart';

//css
import styles from "./css/cartShopping.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const CartShopping = () => {
    const State =useSelector(state=>state.cartShoppingState);
    const dispatch=useDispatch();
    return (<div className={styles.cartShopping}>
        <div className={styles.carts}>
          {
          State.selectedItems.map(item=><Cart key={item.id} data={item}/>)
          }  
        </div>
        <div className={styles.checkOut}>
            {State.checkOut&&<div>
             <p>Thank You For Your Purchase ! </p>
             <Link to="/">+ Buy More</Link>
            </div>}
        {Boolean(State.selectedItems.length)?<div>
            <h3>total: {State.total?State.total:"0"}$</h3>
                <h2>products:{State.itemsCounter}</h2>
                <button onClick={()=>dispatch({type:"CheckOut"})}>CheckOut</button>
                <button onClick={()=>dispatch({type:"Clear"})}>CLEAR</button>
                </div>:<div className={styles.empty}>
                  {State.checkOut?"":<><h3>Your Shopping Cart is Empty</h3> <Link to="/">+ Click to go to the product purchase page!</Link></>}
                    </div>}
        </div>
        </div>
    );
};

export default CartShopping;