// import Products from './components/Products';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
// import NavBar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div >
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}


export default App;
