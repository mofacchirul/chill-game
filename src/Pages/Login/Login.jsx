
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';


import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authcontext/Authcontext';
import Swal from 'sweetalert2';
const Login = () => {
     const [view,setview]=useState(true);
     const {login}=useContext(AuthContext)
     const location = useLocation();
     const navigate = useNavigate();
      
     const from = location.state || '/';

    const HandleLogin = (e) => {
     
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value; 
     
      login(email, password)
      .then(result => {
          Swal.fire({
              title: `${result.user.email} logged in successfully!`,
              icon: "success",
              draggable: true,
          });
          
          navigate(from)
      })
      .catch(error => {
          Swal.fire({
              title: "Login Failed",
              text: error.message,
              icon: "error",
              draggable: true,
          });
      });
      
    
      
     
       
     
  };
  
    return (
        <div className="flex flex-col py-10 lg:flex-row-reverse items-center justify-center min-h-screen">
    
    
          {/* Login Form */}
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl p-6">
            <div>
               <h1 className='font-bold text-xl text-center lg:text-5xl text-orange-300'> Login Now!</h1>
            </div>
            <form className="card-body" onSubmit={HandleLogin}>
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#a712e4]  font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
    
              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-[#a712e4]  font-semibold">Password</span>
                </label>
                <input
                  type={view ? "password"  : "text"}  
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
               <div>
                <button className='absolute -mt-8 ml-[16rem] text-orange-300 text-lg ' onClick={()=>setview(!view)}> {view  ? <FaRegEyeSlash /> :  <FaEye />  } </button>
               </div>
              </div>
    
    
             
    
              {/* Login Button */}
              <div className="form-control mt-6">
                <button disabled={false} className='uppercase btn-block   btn text-white  bg-[#a712e4]  border-2 border-solid border-orange-300 rounded-tr-4xl rounded-bl-4xl '>Login</button>
              </div>
            </form>
            <div>
            {/* <Google></Google> */}
          </div>
                  <div className='text-center'>
                          <h3 className='text-xl text-orange-300 font-semibold'>Create your accountt</h3>
                          <p className='text-orange-300'>Have an account? <Link to="/signup" className='underline text-[#a712e4]'>Resistar in now</Link></p>
                        </div>
    
                 
          </div>
        </div>
      );
};

export default Login;