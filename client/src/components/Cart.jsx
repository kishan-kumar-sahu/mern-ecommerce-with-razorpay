
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Cart = () => {
 
      
   const { userCart , decreaseQty ,   addToCart, RemoveFromCart ,  ClearCart } = useContext(AppContext)
    // console.log("usercart hai :", userCart)


      
        
     const[qty, setQty]=  useState(0)
     const[price, setPrice]=  useState(0)


   useEffect(()=>{
  
     
   
       let qty=0;
        let price=0;

         for( let i=0;i<userCart?.items?.length;i++){

          qty+= userCart.items[i].qty;
             price+=userCart.items[i].price
         }
       setQty(qty)
       setPrice(price)
           
      


     },[userCart])



  return (
    <>
    <div
      className="cart-container"
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333", fontWeight: "600" }}>
        Your Cart
      </h2>
         <h3 className=" text-black text-center">Total Quantity:{qty}</h3>
         
        {
          userCart?.items.map((data)=><div key={data?._id} className="cart-items" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Example Cart Item */}
        <div
          className="cart-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }} >
            
         <div className="mb-3" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img  src={data.imgSrc}
               alt="Product"
              style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover" }}
            />
            <div>
              <h6 style={{ margin: "0 0 5px 0", fontWeight: "500", color: "#111" }}>
                 {data.title}
              </h6>
              <p style={{ margin: "0", color: "#666" }}>Price: {data?.price}</p>
              <p style={{ margin: "0", color: "#666" }}>Quantity: {data?.qty} </p>
            </div>
          </div>



  
      
          
  <div className="cart-actions mb-4" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <button
            onClick={()=>addToCart(data?.productId, data?.title, data?.price/data?.qty, 1,data?.imgSrc)} 
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: "#3498db",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              +  
            </button>
            <button

             onClick={()=>decreaseQty(data?.productId, 1)}
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: "#e74c3c",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              -
            </button>
            <button

             onClick={()=> {
              if(confirm("Are you sure,  want to remove from cart ")){
                  RemoveFromCart(data?.productId)
              }
             } }
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: "#fff",
                color: "#333",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Remove
            </button>
          </div>


        </div>

      

      </div>)
        }

      {/* Total */}
      
         
      <div
        style={{
          marginTop: "30px",
          textAlign: "right",
          fontSize: "20px",
          fontWeight: "600",
          color: "#111",
        }}
      >
        Total Amount:  {price}
      </div>

      {/* Checkout Button  and clear button  hai  */}

     {  userCart?.items?.length>0 &&(  <>   
  <div style={{   display:"flex" , "justify-content": "center"  ,  marginTop: "15px" }}>
        <Link to={'/address'}
          style={{
             textDecoration:"none",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#1beb71",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Checkout
        </Link>

           {/* clear button */}
         <button
            onClick={ ()=>{

                if(confirm("Are you sure, do you want to clear cart")){
                  ClearCart()
                }
            }
               
             }
         className="ms-3 bg-danger "
          style={{width:"120px" , 
           border: "none", 
            borderRadius: "8px",
             fontSize:"23px" ,
              color: "#fff",
              }}>clear</button>



    </div>
    </>  )}

       

    </div>



{

 userCart?.items?.length ==0 &&(<>

  <div className="text-white d-flex justify-content-center     ">

   <Link to={"/"} className="fst-italic bg-info-subtle  d-flex justify-content-center   align-items-center   " style={{borderRadius:"8px", fontFamily:"ui-monospace", width:"200px", height:"40px", fontSize:"20px", textDecoration:"none"  , fontWeight:"bolder"  }}>Continue Shopping...</Link>
</div>
</>) 
}





</>
  );
};

export default Cart;
