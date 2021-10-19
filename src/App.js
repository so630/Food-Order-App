import Header from './components/Layout/Header/Header';
import Meals from './components/Layout/Meals/Meals';
import Cart from './components/Layout/Cart/Cart';
import {useState} from 'react';

function App() {
  const [isCart, setCart] = useState(false);
  const [cart, modifyCart] = useState([]);

  function handler() {
    if (isCart) {
      setCart(false);
    } else {
      setCart(true);
    }
  }

  return (
    <>
        {isCart && <Cart close={handler} cart={cart} modify={modifyCart} cart={cart} />}
        <Header onShowCart={handler} num={cart.length} />
        <main>
          <Meals modify={modifyCart} />
        </main>
    </>
  );
}

export default App;
