import React ,{useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
//components
import Product from './shared/product';
//ProductsActions
import {fetchApi} from "../redux/PruductsData/ActionProductsData"

//cssStayle
import styles from "./css/store.module.css";

//poster
import poster from "./Poster.jpg"
const Store = () => {
    const ProductsState=useSelector((state)=>state.PruductsState);
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!ProductsState.Pruducts.length){dispatch(fetchApi())}
    },[ProductsState.Pruducts.length,dispatch])
    return (<>
        {
        ProductsState.Loading?
        <div className={styles.loading}>
        <div className={styles.loader}>
        <div className={styles.loader_wheel}></div>
        <div className={styles.loader_text}></div>
        </div>
        </div>
        :
        ProductsState.error?
        <div className={styles.loading}>
             <p>Network Error,Your internet is not connected , Make sure you are connected to the Internet</p>
        </div>
        :<>
        <div className={styles.poster} >
            <img alt='poster' src={poster}/>
        </div>
        <div className={styles.store}>
            {ProductsState.Pruducts.map(product=><Product key={product.id} dataProduct={product}/>)}
        </div>
        </>
        }
        </>
    );
};

export default Store