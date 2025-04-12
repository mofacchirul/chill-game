import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authcontext/Authcontext';
import Swal from 'sweetalert2';


const Google = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate(); // ✅ এখানেই useNavigate কল করতে হবে
    const HandleGoole = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;

                // ✅ SweetAlert দেখানো হচ্ছে সফল লগইন হলে
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: `Welcome, ${user.displayName || 'User'}!`,
                    showConfirmButton: false,
                    timer: 2000
                });

                // ✅ ড্যাশবোর্ড বা হোম পেজে পাঠানো
                navigate('/');
            })
            .catch(error => {
                // ❌ যদি কোনো Error হয়, সেটাও দেখানো হবে
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    return (
        <div>
            <div className='py-3'>
                <button onClick={HandleGoole} className="btn rounded-tl-4xl rounded-br-4xl btn-block  text-xl ">
                    <img className='h-10' src='https://i.ibb.co.com/VcjpRTPz/icons8-google-100.png' alt="" /> Google
                </button>
            </div>
        </div>
    );
};

export default Google;
