import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const { products } = res.data;
        if (Array.isArray(products)) {
          setItems(products);
        } else {
          console.error('Products data is not an array:', products);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const addItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
   
    axios.delete(`https://dummyjson.com/products/${id}`)
      .then(res => res.data)
      .then(data => console.log(data.id));
  };

  const updateItem = (updatedItem) => {
    setItems(prevItems => prevItems.map(item => (item.id === updatedItem.id ? updatedItem : item)));

    axios.put(`https://dummyjson.com/products/${updatedItem.id}`, updatedItem)
      .then(res => res.data)
      .then(data => console.log(data));
  };

  console.log('Items:', items);

  const store = {
    items,
    addItem,
    deleteItem,
    updateItem
  };

  return (
    <StoreContext.Provider value={store}>
      {isLoading ? <div>Loading spinner...</div> : children}
    </StoreContext.Provider>
  );
};
