import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";  // for icons 
import { FaLocationDot } from "react-icons/fa6";
  import { TiHeartFullOutline } from "react-icons/ti";
const Navebar = () => {
 
      
   const{ isLoggedIn, logout , userCart  ,  userOrder    }=useContext(AppContext)

           

   const navigate= useNavigate();
  
  const [searchItem, setSearchItem]  = useState("")
  
  
 const  submithandlerButton = (e)=>{
     e.preventDefault();

          if(!searchItem.trim()){
    return   // agar empty hai to kuch nahi karega
  }
     navigate(`/product/search/${searchItem}`)  
       
             setSearchItem("");

 }

    
const handleLogout = () => {
  logout();               // context logout
  navigate("/login");     // redirect
};



      const[latestOrders, setLatestOrders] = useState({})

        useEffect(() => {
         
         if(userOrder?.length){
         setLatestOrders(userOrder[0])
  
       
         }
          
         }, [userOrder])



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3   sticky-top">
      
      {/* LOGO */}
      <Link className="navbar-brand fw-bold" to={"/"}>
      Kishan
      </Link>

      {/* TOGGLER (Mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* NAV ITEMS */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
{/* 
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </li>

          {/* CATEGORY DROPDOWN */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categories
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/category/mobile" >
                  Mobile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/category/laptop">
                  Laptop
                </Link>
              </li>
              
                   <li>
                <Link className="dropdown-item" to="/category/headphone">
                  Headphone
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/category/camera">
                   Camere
                </Link>
              </li>

                   <li>
                <Link className="dropdown-item" to="/category/watch">
                    Watch 
                </Link>
              </li>
                  <li>
                <Link className="dropdown-item" to="/category/speaker">
                    Speakers
                </Link>
              </li>




              <li>
                <Link className="dropdown-item" to="/category/accessories">
                  Accessories
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* SEARCH */}
        <form className="d-flex me-3" onSubmit={submithandlerButton}>
          <input
           onChange={(e)=>setSearchItem(e.target.value)}

            value={searchItem}
            className="form-control"
            type="text"
            placeholder="Search products..."
          />
        </form>

   

        <Link to="/cart" type="button" class="btn btn-primary position-relative me-4">
              <FaShoppingCart />




    {
    (userCart?.items?.length >0 && ( <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    { 
    
    // userCart?.items?.length
     userCart?.items?.reduce(
    (total, item) => total + item.qty,
    0
  )
  
    }
    <span class="visually-hidden">unread messages</span>
   
  </span>))
    }





</Link>

        {/* LOGIN */}

  {!isLoggedIn ?(

    <>
    <Link to="/login" className="btn btn-outline-light me-2">
          Login
        </Link>

           <Link to="/register" className="btn btn-outline-light me-2 ">
           Register
        </Link>
      </>
      )
        :(

<>
            
   <button className="nav-item dropdown ms-3  dropdown-hover "  style={{ borderRadius: " 12px"}} >
  <span
    className="nav-link dropdown-toggle fw-semibold d-flex align-items-center gap-2"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ cursor: "pointer",  height:"32px", borderRadius: " 34px"}}
  >
    👤 My Account
  </span>

  <ul
    className="dropdown-menu dropdown-menu-end shadow rounded-3 border-0 p-2"
    style={{ minWidth: "200px" }}
  >
    <li>
      <Link className="dropdown-item d-flex align-items-center gap-2" to="/profile">
        👨‍💼 <span>Profile</span>
      </Link>
    </li>


  

     <li>
      <Link className="dropdown-item d-flex align-items-center gap-2" to={`/myorder/${latestOrders.orderId}`}>
        📦 <span>My Orders</span>
      </Link>
    </li>

    <li>
      <Link className="dropdown-item d-flex align-items-center gap-2" to="/wishlist">
        ❤️   <span>Wishlist</span>
      </Link>
    </li>
      <li>
      <Link className="dropdown-item d-flex align-items-center gap-2" to={`/trackorder/${latestOrders.orderId}`}>
        <FaLocationDot />
         <span> Track Order</span>
      </Link>
    </li>

    <li><hr className="dropdown-divider" /></li>

    <li>
      <button
        className="dropdown-item d-flex align-items-center gap-2 text-danger fw-semibold"
        onClick={handleLogout}
      >
        🚪 Logout
      </button>
    </li>
  </ul>
</button>



 </>
        )

        
 }

        



   


      </div>





    </nav>
  );
};

export default Navebar;
