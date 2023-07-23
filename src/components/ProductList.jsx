import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import '../styles.css';

const ProductList = () => {
  const { items, isLoading } = useContext(StoreContext);

  if (isLoading) {
    return <div>Loading spinner...</div>;
  }

  if (items.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="product-list">
      {items.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductItem = ({ product }) => {
  const { deleteItem } = useContext(StoreContext);
  const { id, title, price, brand, category, thumbnail, images } = product;
  const [showGallery, setShowGallery] = useState(false);

  const handleDelete = () => {
    deleteItem(id);
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} className="product-image" onClick={toggleGallery} />
      {showGallery && (
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      )}
      <h2>{title}</h2>
      <p className="product-price">
        Price: ${price} 
      </p>
      <p className="product-brand">Brand: {brand}</p>
      <p className="product-category">Category: {category}</p>
      <div className="button-container">
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <Link to={`/product/${id}`} className="details-link">
          View Details
        </Link>
        <Link to={`/product/edit/${id}`} className="edit-link">
          Edit Product
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
