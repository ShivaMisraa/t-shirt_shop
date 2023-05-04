import React, { useState } from 'react';
import styles from './TshirtForm.module.css';
import TshirtDisplay from './TshirtDisplay';

const TshirtForm = ({ onSubmit }) => {
  const [brandName, setBrandName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0 });
  const [showDisplay, setShowDisplay] = useState(false);

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSizes({ ...sizes, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDisplay(true);
    onSubmit({
      brandName,
      description,
      price,
      sizes,
    });
    setBrandName('');
    setDescription('');
    setPrice('');
    setSizes({ S: 0, M: 0, L: 0 });
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-left']}>
        <form onSubmit={handleSubmit}>
          <h2>Add a T-Shirt</h2>
          <label>
            Brand Name:
            <input type="text" value={brandName} onChange={handleBrandNameChange} />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={handleDescriptionChange} />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={handlePriceChange} />
          </label>
          <span>Quantity Available</span>
          <label>
            Small:
            <input type="number" name="S" value={sizes.S} onChange={handleSizeChange} />
          </label>
          <label>
            Medium:
            <input type="number" name="M" value={sizes.M} onChange={handleSizeChange} />
          </label>
          <label>
            Large:
            <input type="number" name="L" value={sizes.L} onChange={handleSizeChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={styles['form-right']}>
        {showDisplay && (
          <TshirtDisplay
            brandName={brandName}
            description={description}
            price={price}
            sizes={sizes}
            onBuy={(size) => console.log(`Adding ${size} to cart...`)}
          />
        )}
      </div>
    </div>
  );
};

export default TshirtForm;
