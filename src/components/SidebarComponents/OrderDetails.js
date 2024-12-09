import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext} from 'react';
import { CartContext } from '../../usecontexts/CartProvider';

export default function OrderDetails() {
    const { order } = useContext(CartContext);


    console.log('OrderDetails Page:', order);

    if (!order || order.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img 
                    style={{ width: '250px', height: '250px', marginBottom: '20px' }}
                    src={require('../../images/Order-ride-amico.png')}
                    alt="Product-empty"
                    className="img-fluid"
                />
                <p className="text-muted">No order details available.</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Your Order Details</h2>
            <div className="row">
                {order.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Category: {item.category}</p>
                                <p className="card-text">Quantity: {item.quantity}</p>
                                <p className="card-text"><strong>Price: ${item.price}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
