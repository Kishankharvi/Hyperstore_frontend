import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../utils/api';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Product ID for editing

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        try {
          const product = await apiService.getProduct(id);
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategory(product.category);
          setImageUrl(product.imageUrl);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const productData = {
      name,
      description,
      price,
      category,
      imageUrl,
    };

    try {
      if (id) {
        await apiService.updateProduct(id, productData);
      } else {
        await apiService.createProduct(productData);
      }
      navigate('/products'); // Redirect to product list
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Product' : 'Create Product'}</h2>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;