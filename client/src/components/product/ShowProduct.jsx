// import React from 'react'

// import AppContext from '../../context/AppContext'
// import { useContext } from 'react'
//   import {Link, useNavigate} from "react-router-dom"
// import { toast } from 'react-toastify'

// // function ShowProduct() {
     
// //      const navigate= useNavigate()
// //  const {products  ,  addToCart} = useContext(AppContext)

// //   return (

// // <>

// // < div className="d-flex  justify-content-center align-items-center " style={{ height:"100vh", color:"magenta"}}>{products?.length==0 } does not exist product</div>
            
// //    < div  className="d-flex justify-content-center   justify-content-md-around flex-wrap  gap-3 p-3"  >
// //   {/* <div>ShowProduct</div> */}
// //     {products?.map((product)=>
    
// //        <div  key={product?._id}>
// // <div className="card  bg-dark text-white  text-center rounded-4" style={{width: "18rem"}}>

// //   <Link to={`/product/${product?._id}`}  className=" d-flex justify-content-center align-items-center ">
// //  <img  src={product.imgSrc} className="card-img-top  rounded-4 m-2" alt="..."  style={{width:"230px" , height: "210px"}}   />
// //   </Link>

 
// //   <div className="card-body">
// //     <h5 className="card-title">{product?.title}</h5>
// //      {/* <h5 className="card-title">{product.price}</h5> */}
// //     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
// //      <div className='    d-flex   gap-3   justify-content-center py-3'>
// //           < a className="btn btn-primary"
          
// //         onClick={()=>{addToCart(product?._id, product?.title, product?.price, 1 ,product?.imgSrc)

// //             navigate("/checkout");
// //         }}

// //           > Buy at {"₹"}{" "}{product?.price} </a>
// //            <a className="btn text-dark bg-warning  "   onClick={()=>addToCart(product?._id, product?.title, product?.price, 1 ,product?.imgSrc)}>Add to cart</a>
// //      </div>
// //   </div>
// // </div>

// // </div>   


    

// //      )}

// // </div>
  
// //   </>
// //   )
// // }

// // export default ShowProduct





// ///





// function ShowProduct() {
     
//   const navigate = useNavigate()
//   const { products, addToCart ,URL } = useContext(AppContext)

     

//   return (
//     <>
//       {
//         products?.length === 0 ? (

//           //  Jab product empty ho
//           <h1
//             className="d-flex justify-content-center align-items-center" 
//             style={{ height: "100vh", color: "magenta", backgroundColor:"skyblue" }}
//           >
//             Product does not exist
//           </h1>

//         ) : (

//           //  Jab product available ho
//           <div className="d-flex justify-content-center justify-content-md-around flex-wrap gap-3 p-3">
            
//             {products?.map((product) => (
              
//               <div key={product?._id}>
//                 <div className="card bg-dark text-white text-center rounded-4" style={{ width: "18rem" }}>

//                   <Link 
//                     to={`/product/${product?._id}`}  
//                     className="d-flex justify-content-center align-items-center"
//                   >
//                     <img  
//                             src={product.imgSrc}
                    
//                       className="card-img-top rounded-4 m-2" 
//                       alt={product?.title}  
//                       style={{ width: "230px", height: "210px" }} 
                          
//                     />
//                   </Link>
                    

//                   <div className="card-body">
//                     <h5 className="card-title">{product?.title}</h5>

//                     <div className="d-flex gap-3 justify-content-center py-3">
                      
//                       <button 
//                         className="btn btn-primary"
//                         onClick={() => {
                             
//                             const token= localStorage.getItem("token")
//                               if(!token){
//                                   return  navigate("/login")
                                 
//                               }
//                          addToCart(product?._id, product?.title, product?.price, 1, product?.imgSrc)
//                            navigate("/checkout")
//                         }}
//                       >
//                         Buy at ₹ {product?.price}
//                       </button>

//                       <button 
//                         className="btn text-dark bg-warning"
//                         onClick={() => 
//                           addToCart(product?._id, product?.title, product?.price, 1, product?.imgSrc)
//                         }
//                       >
//                         Add to cart
//                       </button>

//                     </div>
//                   </div>

                    
//                 </div>
                
//               </div>
                

//             ))}

//           </div>

//         )
//       }
//     </>
//   )
// }


// export default ShowProduct;


///////////

// import React, { useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaRegHeart, FaHeart } from "react-icons/fa"; // UI only
// import AppContext from "../../context/AppContext";
// import { useState } from "react";

// function ShowProduct() {
//   const navigate = useNavigate();
//   const { products } = useContext(AppContext);

//       const [liked, setLiked]=  useState(false)

//   return (
//     <>
//       {products?.length === 0 ? (
//         <h1
//           className="d-flex justify-content-center align-items-center"
//           style={{ height: "100vh", color: "magenta", backgroundColor: "skyblue" }}
//         >
//           Product does not exist
//         </h1>
//       ) : (
//         <div className="d-flex justify-content-center justify-content-md-around flex-wrap gap-3 p-3">
//           {products?.map((product) => (
//             <div key={product?._id}>
//               <div className="card bg-dark text-white text-center rounded-4" style={{ width: "18rem" }}>
                
//                 {/* Product image with heart on top-right */}
//                 <div className="position-relative">
//                   <Link
//                     to={`/product/${product?._id}`}
//                     className="d-flex justify-content-center align-items-center"
//                   >
//                     <img
//                       src={product.imgSrc}
//                       className="card-img-top rounded-4 m-2"
//                       alt={product?.title}
//                       style={{ width: "230px", height: "210px", objectFit: "cover" }}
//                     />
//                   </Link>
//                   {/* Heart icon at top-right corner of the image */}
//                   <div
//                      onClick={ ()=>setLiked(!liked)}

//                     className="position-absolute"
//                     style={{ top: "10px", right: "10px", fontSize: "24px",  opacity: 0.2}}
//                   >
//              {liked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-white" />}
//                     {/* <FaRegHeart className="text-white" /> */}
//                   </div>
//                 </div>

//                 <div className="card-body">
//                   <h5 className="card-title">{product?.title}</h5>
//                   <div className="d-flex gap-3 justify-content-center py-3">
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => navigate("/checkout")}
//                     >
//                       Buy at ₹ {product?.price}
//                     </button>
//                     <button className="btn text-dark bg-warning">Add to cart</button>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default ShowProduct;






// 





          //    current

// import React, { useContext, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import AppContext from "../../context/AppContext";

// function ShowProduct() {
//   const navigate = useNavigate();
//   const { products ,  addeishlist,  addToCart, userAddress} = useContext(AppContext);

 
//   const [likedProducts, setLikedProducts] = useState({});

//   const toggleLike = (productId) => {
//     setLikedProducts((prev) => ({
//       ...prev,
//       [productId]: !prev[productId],
//     }));
//   };

//   return (
//     <>
//       {products?.length === 0 ? (
//         <h1
//           className="d-flex justify-content-center align-items-center"
//           style={{ height: "100vh", color: "magenta", backgroundColor: "skyblue" }}
//         >
//           Product does not exist
//         </h1>
//       ) : (
//         <div className="d-flex justify-content-center justify-content-md-around flex-wrap gap-3 p-3">
//           {products?.map((product) => {
//             const liked = likedProducts[product._id] || false;

//             return (
//               <div key={product._id}>
//                 <div className="card bg-dark text-white text-center rounded-4" style={{ width: "18rem" }}>
                  
//                   {/* Product image with heart */}
//                   <div className="position-relative">
//                     <Link
//                       to={`/product/${product._id}`}
//                       className="d-flex justify-content-center align-items-center"
//                     >
//                       <img
//                         src={product.imgSrc}
//                         className="card-img-top rounded-4 m-2"
//                         alt={product?.title}
//                         style={{ width: "230px", height: "210px", objectFit: "cover" }}
//                       />
//                     </Link>

//                     {/* Heart icon  */}
//                     <div
//                       className="position-absolute"
//                       style={{ top: "10px", right: "10px", fontSize: "24px", opacity: 0.4, cursor: "pointer" }}
//                       onClick={() =>{

//                              toggleLike(product._id)
//                             addeishlist(product._id)
//                       }
                        

//                       }

//                     >
//                       {liked ? <FaHeart   className="text-red-500" color="red"  /> : <FaRegHeart    />}
//                     </div>
//                   </div>

//                   <div className="card-body">
//                     <h5 className="card-title">{product?.title}</h5>
//                     <div className="d-flex gap-3 justify-content-center py-3">
//                       <button
                      
//                       className="btn btn-primary" 
//                             onClick={() => {
                             
//                             const token= localStorage.getItem("token")
//                               if(!token){
//                                   return  navigate("/login")
                                 
//                               }
//                          addToCart(product?._id, product?.title, product?.price, 1, product?.imgSrc)
  
//                              if(!userAddress|| userAddress.length===0){
//                                      navigate("/address")
//                              }else{
//                                navigate("/checkout")
//                              } }}
                    
//                       >
//                         Buy at ₹ {product?.price}
//                       </button>
//                       <button
//                          onClick={()=>addToCart(product?._id, product?.title, product?.price, 1, product?.imgSrc)}
//                       className="btn text-dark bg-warning">Add to cart</button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// }

// export default ShowProduct;



//////

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import AppContext from "../../context/AppContext";

function ShowProduct() {
  const navigate = useNavigate();
  const { products, addeishlist, addToCart, userAddress } = useContext(AppContext);

  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <>
      {products?.length === 0 ? (
        <h1
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            color: "magenta",
            backgroundColor: "skyblue",
          }}
        >
            Loadind...
        </h1>
      ) : (
        <div className="container py-4">
          <div className="row g-4 justify-content-center">
            {products?.map((product) => {
              const liked = likedProducts[product._id] || false;

              return (
                <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card bg-dark text-white text-center rounded-4 shadow-sm h-100">

                    {/* Product image */}
                    <div className="position-relative">

                      <Link
                        to={`/product/${product._id}`}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src={product.imgSrc}
                          className="card-img-top rounded-4 p-2"
                          alt={product?.title}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>

                      {/* Wishlist icon */}
                      <div
                        className="position-absolute"
                        style={{
                          top: "10px",
                          right: "10px",
                          fontSize: "22px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          toggleLike(product._id);
                          addeishlist(product._id);
                        }}
                      >
                        {liked ? (
                          <FaHeart color="red" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{product?.title}</h5>

                      <div className="d-flex gap-2 justify-content-center mt-3 flex-wrap">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            const token = localStorage.getItem("token");

                            if (!token) {
                              return navigate("/login");
                            }

                            addToCart(
                              product?._id,
                              product?.title,
                              product?.price,
                              1,
                              product?.imgSrc
                            );

                            if (!userAddress || userAddress.length === 0) {
                              navigate("/address");
                            } else {
                              navigate("/checkout");
                            }
                          }}
                        >
                          Buy ₹ {product?.price}
                        </button>

                        <button
                          onClick={() =>
                            addToCart(
                              product?._id,
                              product?.title,
                              product?.price,
                              1,
                              product?.imgSrc
                            )
                          }
                          className="btn btn-warning text-dark"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ShowProduct;