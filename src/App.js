import React, { useState } from 'react';
import TshirtForm from './Component/TshirtForm';
import Cart from './Component/Cart';

const App = () => {
  const [tshirts, setTshirts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addTshirt = (tshirt) => {
    setTshirts([...tshirts, tshirt]);
  };

  const addToCart = (tshirt, size) => {
    const existingItem = cartItems.find(item => item.tshirt === tshirt && item.size === size);
    if (existingItem) {
      setCartItems(cartItems.map(item => item === existingItem ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCartItems([...cartItems, {tshirt, size, quantity: 1}]);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>T-Shirt Shop</h1>
        <Cart items={cartItems} />
      </header>
      <main>
        <TshirtForm onSubmit={addTshirt} onBuy={addToCart} />
        <div>
          {tshirts.map((tshirt, index) => (
            <div key={index}>
              <h2>{tshirt.brandName}</h2>
              <p>{tshirt.description}</p>
              <p>Price: ${tshirt.price}</p>
              <div>
                <span>Buy Small ({tshirt.sizes.S}): </span>
                <button onClick={() => addToCart(tshirt, 'S')}>Add to Cart</button>
              </div>
              <div>
                <span>Buy Medium ({tshirt.sizes.M}): </span>
                <button onClick={() => addToCart(tshirt, 'M')}>Add to Cart</button>
              </div>
              <div>
                <span>Buy Large ({tshirt.sizes.L}): </span>
                <button onClick={() => addToCart(tshirt, 'L')}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
