import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import '../styles.css';

const EditProductForm = () => {
  const { items, updateItem } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = parseInt(id, 10);

  const product = items.find(item => item.id === productId);
  const [title, setTitle] = useState(product ? product.title : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [discountPercentage, setDiscountPercentage] = useState(product ? product.discountPercentage : 0);
  const [rating, setRating] = useState(product ? product.rating : 0);
  const [stock, setStock] = useState(product ? product.stock : 0);
  const [brand, setBrand] = useState(product ? product.brand : '');
  const [category, setCategory] = useState(product ? product.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: productId,
      title,
      price,
      description,
      discountPercentage,
      rating,
      stock,
      brand,
      category
    };
    updateItem(updatedProduct);
    navigate('/');
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        Title:
        <input className="form-input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label className="form-label">
        Price:
        <input className="form-input" type="text" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <label className="form-label">
        Description:
        <textarea className="form-textarea" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label className="form-label">
        Discount (%):
        <input className="form-input" type="number" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)} />
      </label>
      <label className="form-label">
        Rating:
        <input className="form-input" type="number" value={rating} onChange={e => setRating(e.target.value)} />
      </label>
      <label className="form-label">
        Stock:
        <input className="form-input" type="number" value={stock} onChange={e => setStock(e.target.value)} />
      </label>
      <label className="form-label">
        Brand:
        <input className="form-input" type="text" value={brand} onChange={e => setBrand(e.target.value)} />
      </label>
      <label className="form-label">
        Category:
        <input className="form-input" type="text" value={category} onChange={e => setCategory(e.target.value)} />
      </label>
      <button className="button" type="submit">Save changes</button>
    </form>
  );
};

export default EditProductForm;
