import React, { useState } from 'react';
import TshirtForm from './TshirtForm';
import TshirtDisplay from './TshirtDisplay';

const TshirtPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [tshirt, setTshirt] = useState(null);

  const handleSubmit = (newTshirt) => {
    setTshirt(newTshirt);
    setSubmitted(true);
  };

  return (
    <div>
      <TshirtForm onSubmit={handleSubmit} />
      {submitted && (
        <div>
          <h2>Added T-Shirt:</h2>
          <TshirtDisplay
            brandName={tshirt.brandName}
            description={tshirt.description}
            price={tshirt.price}
            sizes={tshirt.sizes}
          />
        </div>
      )}
    </div>
  );
};

export default TshirtPage;
