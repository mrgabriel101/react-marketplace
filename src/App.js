import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartItemsProvider } from './context/CartItemsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <ProductsProvider>
      <CartItemsProvider>
        <Router>
          <div className="App">
            <Header></Header>
            <Routes>
              <Route path="/" element={<ProductList></ProductList>} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </CartItemsProvider>
    </ProductsProvider>
  );
}

export default App;
