import Products from './components/Products';
import './style.scss';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      {/* <Products /> */}
    </div>
  );
}

function Cart() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          Go to all products
        </p>
      </main>
      <nav>
        <Link to="/"> products</Link>
      </nav>
    </>
  );
}
export default App;
