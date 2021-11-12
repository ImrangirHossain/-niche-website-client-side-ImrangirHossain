import React from 'react';

const AllOrderDetails = (props) => {
   const {order, orders, setOrders} =props;

   const handleDeleteUser = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://dry-spire-45697.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = orders.filter(user => user._id !== id);
                    setOrders(remainingOrders);
                }
            });
           }
      }

      const HandleUpdateBooking = id => {
        const updateStatus = {img:order.img, title:order.title, discription:order.discription, status: 'Approved '  }

        const url = `https://dry-spire-45697.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload(false)
                }
            })
    }

    return (
        <div>
            <div className="card h-100">
                    <img height="225" src={order?.img} className="card-img-top" alt="..."/>
                    <div className="card-body text-start">
                     <h6 className="text-start">Price: ${order?.price}</h6>   
                    <h5 className="card-title">{order?.title}</h5>
                     <p><small> {order?.discription}</small></p>   
                     <p className="text-muted text-start">By: {order?.email}</p>
                     <div >
                        <div className="mb-2 d-flex justify-content-between">
                           <button className="btn btn-success me-1">{order.status}</button>
                            <button  onClick={() => handleDeleteUser(order._id)} className="btn btn-danger ">Delete</button>
                        </div>
                           <div>
                               <button onClick={() => HandleUpdateBooking(order._id)} className="btn btn-success">Approved Order</button>
                           </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
};
export default AllOrderDetails;