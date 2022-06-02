import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import Checkout from './components/checkout/Checkout';
// import CartItems from './components/cart/Cart'

function App() {
  return (
    <div >
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="cart" element={<CartItems />} /> */}
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}


export default App;
