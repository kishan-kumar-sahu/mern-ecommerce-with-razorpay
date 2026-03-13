

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppContext from "../context/AppContext"

const TrackOrderPage = () => {

    const {URL}= useContext(AppContext)

  const { orderId } = useParams();
 
  const [order, setOrder] = useState(null);
 

  
  useEffect(() => {    // Page load pe ek baar call

    fetchOrder();
  }, [orderId , URL ]);

useEffect(() => {
  const interval = setInterval(() => {
    fetchOrder();
  }, 5000); // ⏱ 5 sec

  return () => clearInterval(interval);
}, [orderId, URL]);



    const fetchOrder = async () => {
      try {
        const res = await axios.get(`${URL}/order/${orderId}`,{
          headers:{
            Auth: localStorage.getItem("token")
          }
        });

      // console.log("order ka details track page wala  " ,res.data )
        setOrder(res.data);
      } catch (error) {
        console.log(error);
      } 
      
    };


  if (!order) {
    return <h4 className="text-center mt-5 text-danger">Order not found</h4>;
  }

  const steps = [
    { key: "placed", label: "Order Placed" },
    { key: "Packed", label: "Packed" },
    { key: "Shipped", label: "Shipped" },
    { key: "Delivered", label: "Delivered" }
  ];






  const activeIndex = steps.findIndex(
    step => step.key === order?.orderStatus
  );                                  


  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h3 className="fw-bold mb-1">Track Your Order</h3>
        <p className="text-muted">Order ID: {order.orderId}</p>

        {/* Progress Bar */}
        <div className="progress mb-4" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-success"
            style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="row text-center">
          {steps.map((step, index) => (
            <div className="col" key={step.key}>
              <div
                className={`rounded-circle mx-auto mb-2 ${
                  index <= activeIndex ? "bg-success" : "bg-secondary"
                    
                }`}
                style={{ width: 40, height: 40 }}
              />
              <p
                className={`small fw-semibold ${
                  index <= activeIndex ? "text-success" : "text-muted"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <hr />
        <p><b>Payment:</b> {order?.payStatus}</p>
        <p><b>Total Amount:</b> ₹{order?.amount}</p>
        {/* <p><b>Delivery:</b> 3-5 working days</p> */}
      </div>
    </div>
  );
};

export default TrackOrderPage;
