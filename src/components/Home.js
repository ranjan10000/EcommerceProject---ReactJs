import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../reducer/CardSlice';

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart.cartItems);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData())
        .unwrap()
        .then(() => console.log('Data fetched successfully'))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [status, dispatch]);

  console.log('data', data);
  console.log('status', status);
  console.log('error', error);

  // Render component based on the state
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
