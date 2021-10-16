import { Switch ,Route} from 'react-router-dom'

// import components
import Default from '../components/Default';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Product from '../Pages/Product';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        {/* Auth Pages */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Page 404 */}
        <Route component={Default} />
      </Switch>
  );
}

export default Routes;
