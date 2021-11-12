import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import AllOrderDetails from './AllOrderDetails';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const {isLoading} = useAuth();
        useEffect(()=>{
            fetch('https://dry-spire-45697.herokuapp.com/orders')
            .then(res => res.json())
            .then(data=> setOrders(data))
        },[]);
        if (isLoading) {
            return<div className="spinner-border text-info" role="status"></div>
            }

        return (
            <div className="Order p-4">
            <h2 className="fw-bold text-start py-3 px-1">MANAGE ALL BOOKING</h2>
               
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-0 mx-2 ">
               {
                        orders.map(order => <AllOrderDetails 
                            key={order._id}
                            order={order}
                            orders= {orders}
                            setOrders={setOrders}
                        >
                        </AllOrderDetails>)
                    }
                    </div>
            </div>
        );
    };
export default ManageAllOrder;