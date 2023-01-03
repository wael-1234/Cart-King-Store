import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route} from "react-router-dom";
import Products from './component/Products';
import Product  from './component/Product';
import Cart from './component/Cart/Cart';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import Register from './component/Register/Register'
import Footer from './component/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/:id' component={Product} />
      <Route exact path='/Cart' component={Cart} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Register' component={Register} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
