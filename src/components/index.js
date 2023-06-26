import products from './data';
import './index.css';
import ProductList from './ProductList';

function App() {
  return (
    <ProductList data={products} />
  );
}

export default App;
