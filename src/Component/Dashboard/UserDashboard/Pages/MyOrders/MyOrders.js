import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const {user, isLoading} = useAuth();

    const [orders, setOrders] = useState([]);
        useEffect(()=>{
            fetch('https://dry-spire-45697.herokuapp.com/orders')
            .then(res => res.json())
            .then(data=> setOrders(data))
        },[]);

    if (isLoading) {
        return<div className="spinner-border text-info" role="status"></div>
        }

    const myOrders = orders.filter(order => order.email===user.email)
    return (
        <div className="Order p-4">
        <h2 className="fw-bold text-start py-3 px-1">MY ORDERS</h2>
           
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 ">
           {
                    myOrders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                        orders= {orders}
                        setOrders={setOrders}
                    >
                    </MyOrder>)
                }
                </div>
        </div>
    );
};

export default MyOrders;