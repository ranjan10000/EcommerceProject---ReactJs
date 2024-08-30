

import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderDetails({orders}){

    console.log('OrderDetails Page' + orders);
    return(
        <div className="d-flex order order-info">
                    <img 
                        style={{ width: '250px', height: '250px',justifyContent:'center' }}
                        src={require('../../images/Order-ride-amico.png')}
                        alt="Product-empty"
                        className="img-fluid"
                    />
        </div>
        
    )
}
