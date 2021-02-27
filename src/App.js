import { useEffect, useState } from 'react';
import './styles/global.css';
import api from './services/api';

function App() {
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    api.get('').then((response) => {
      setStoreProducts(response.data);
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div id="store">
      <ul>
        <li>Akita's Shopping Cart</li>
        <li className="author">by Rafael Sanchez Souza</li>
      </ul>
    </div>
  );
}

export default App;
