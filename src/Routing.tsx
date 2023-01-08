import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Products from './features/products/Products';
import Quote from './features/quote/Quote';
import Services from './features/services/Services';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}

export default Routing;
