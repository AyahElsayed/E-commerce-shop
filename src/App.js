// import Products from './components/Products';
import './style.scss';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
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
