// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
//  import axios from "axios";
//   import { useNavigate } from "react-router-dom";
//  import { toast } from "react-toastify";
// import AppContext from "../../context/AppContext";
 

 
// const Login = () => {

//    const {setIsLoggedIn}=  useContext(AppContext)



//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//    const  navigate= useNavigate();

//   const handleSubmit = async(e) => {
//     e.preventDefault();
   

  
//  const url= "http://localhost:3000/api/user/login"


    
//  const res= await fetch(url,{
//     method: "post",
//     headers :{
//     "Content-Type":"application/json"
//     },
//      body: JSON.stringify({email, password})
//   })

//   console.log(res)
//   const data=await res.json()
//    console.log(data.token)

//   localStorage.setItem("token",data.token)
//     setIsLoggedIn(true);  
// console.log(data)

// if(!res.ok){
//     toast.error(data.message || "Login failed");
//   return;
// }

// toast.success(data.message);
// navigate("/");

//     setEmail("")
//      setPassword("")

   
      
    
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
//       <div className="card shadow-lg p-4 rounded-4" style={{ width: "380px" }}>
//         <h3 className="text-center mb-4 fw-bold">Login</h3>

//         <form onSubmit={handleSubmit}>
//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Button */}
//           <button className="btn btn-primary w-100 rounded-pill">
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-3 mb-0">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-primary" style={{ cursor: "pointer" }}>
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


//////////




import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
 import axios from "axios";
  import { useNavigate } from "react-router-dom";
 import { toast } from "react-toastify";
import AppContext from "../../context/AppContext";
 

 
const Login = () => {

   const {setIsLoggedIn , UserAndAdminLogin}=  useContext(AppContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const  navigate= useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
   

     const role= await   UserAndAdminLogin(email, password)   
     
             if(role==="admin"){
             navigate("/admin/dashboard")
             }

            else{
              navigate("/")
            }

    
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4 fw-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button className="btn btn-primary w-100 rounded-pill">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary" style={{ cursor: "pointer" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;