import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";
import Product from "./components/pages/Product/Product";
import useScrollToTop from "./hooks/useScrollToTop";
import './styles/style.scss'

function App() {
  useScrollToTop()
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
