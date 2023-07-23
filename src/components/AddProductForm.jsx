import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import '../styles.css';

const AddProductForm = () => {
  const { addItem } = useContext(StoreContext);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      title,
      price,
      description,
      discountPercentage,
      rating,
      stock,
      brand,
      category
    };
    addItem(newProduct);
    setTitle('');
    setPrice('');
    setDescription('');
    setDiscountPercentage(0);
    setRating(0);
    setStock(0);
    setBrand('');
    setCategory('');
  };

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
      <button className="button" type="submit">Add product</button>
    </form>
  );
};

export default AddProductForm;
