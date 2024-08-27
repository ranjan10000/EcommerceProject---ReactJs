import React, { useState, useContext } from 'react';
import { ProductsContext } from "../../usecontexts/ProductProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateProduct() {
  const [dummyData, setDummyData] = useContext(ProductsContext);

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new product to the dummy data list
    
    setDummyData([...dummyData, { ...product, id: dummyData.length + 1 }]);
    // Reset the form
    setProduct({
      name: '',
      price: '',
      category: '',
    });
  };

  return (
    <div className="container mt-6">
      <h5>Create Product</h5>
      <form onSubmit={handleSubmit} className='col-4'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            className="form-control"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">--</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="shoes">Shoes</option>
            <option value="cosmetics">Cosmetics</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create Product</button>
      </form>
    </div>
  );
}
