import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import '../styles.css';

const ProductDetails = () => {
  const { items } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = parseInt(id, 10);

  const product = items.find(item => item.id === productId);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!product) {
    return <div className="product-details">Product not found.</div>;
  }

  const { title, price, description, discountPercentage, rating, stock, brand, category, thumbnail, } = product;

  return (
    <div className="product-details">
      <img src={thumbnail} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>Price: ${price} (Discount: {discountPercentage}%)</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
      <p>Stock: {stock} units</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <button className="button" onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default ProductDetails;
