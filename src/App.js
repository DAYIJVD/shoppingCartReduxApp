//ContextPruducts component
// import {ProductsContextProvider} from "./context/productsContextProvider";
// import {ReducerContextProvider} from "./context/reducerContext";
//components
import Store from "./components/store";
import detailProduct from "./components/detailProduct";
import Navbar from "./components/navbar";
import CartShopping from "./components/cartShopping";
//react-Router-dom
import { Route,Switch ,Redirect} from "react-router-dom";
import Footer from "./components/footer";
import store from "./redux/store";
import { Provider } from "react-redux";
import ScrolltoTop from "./components/ScrolltoTop";
function App() {
  return (
  <Provider store={store}>
      <Navbar/>
      <ScrolltoTop>
    <Switch>
      <Route path="/Product/:id" component={detailProduct} /> 
      <Route path="/shoppingCart" component={CartShopping}/>
     <Route path="/" component={Store}/> 
     <Redirect from="/Product" to="/"/>
    </Switch>
    </ScrolltoTop>
    <Footer/>
    </Provider>
  );
}

export default App;
