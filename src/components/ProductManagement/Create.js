import React, { useState, useContext } from 'react';
import { ProductsContext } from '../../usecontexts/ProductProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CreateProduct() {
  const notify = () => toast('Created Successfully!');

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
    const newProduct = { ...product, id: dummyData.length + 1 };
    setDummyData([...dummyData, newProduct]);
    // Show notification
    notify();
    // Reset the form
    setProduct({
      name: '',
      price: '',
      category: '',
    });
  };

  return (

    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-5">
          <h5>Create Product</h5>
          <form onSubmit={handleSubmit}>
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
                <option value="">-- Select Category --</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="shoes">Shoes</option>
                <option value="cosmetics">Cosmetics</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Create Product</button>
          </form>
        </div>
        <div className="col-md-4">
          {/* Placeholder for image or additional content */}
          <img
            src={require('../../images/product-hunt-bro.png')}
            alt="Product"
            className="img-fluid"
            style={{marginLeft:'150px'}}
          />
        </div>
      </div>
      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
