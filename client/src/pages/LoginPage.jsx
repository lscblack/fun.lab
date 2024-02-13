import React, { useState, useEffect } from 'react'
import '../assets/styles/LoginPage.css'
import AllSate from './AllState'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function LoginPage() {
    //naviagtion
    const goto = useNavigate()
    //allow crediants
    axios.defaults.withCredentials = true

    // For Account Creation
    const [UserLogin, setUserLogin] = AllSate()
    /**
     * Validate USernames 
     */
    function isUsernameValid(username) {
        // Check if username contains spaces or characters other than . and _
        const regex = /^[a-zA-Z0-9_.]+$/; // Allows letters, numbers, ., and _
        if (!/\s/.test(username) && regex.test(username)) {
            if (username.length < 49 && username.length > 3) {
                if (/^\d/.test(username)) {
                    return "Username cannot start with a number";
                } else {
                    // Login Check If Username Is In Database
                    return "Enter Password To Go !!"
                }
            } else {
                return "Username must be 4 to 50 characters long"
            }
        } else {
            return "<small>username contains spaces or characters other than . and _characters</small> "
        }
    }
    /**
     * Validate Passwords 
     */
    const handelLogin = () => {
        if (UserLogin.password.trim() == "") {
            document.getElementById("response").innerHTML = "Password is Required !!";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');
        } else if (UserLogin.password.length < 4 || UserLogin.password.length > 50) {
            document.getElementById("response").innerHTML = "Password must be 4 to 50 characters long";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');
        } else {
            // send data To Login Api and get Response
            axios.post('http://localhost:5000/api/v1/login', UserLogin).then((response) => {
                if (response.data.status == "success") {
                    document.getElementById('response').innerHTML = "Login Successful !!";
                    document.getElementById('response').classList.remove('text-red-500');
                    document.getElementById('response').classList.remove('text-blue-500');
                    document.getElementById('response').classList.add('text-green-500');
                    document.getElementById('response').classList.add('font-normal');
                }
                else {
                    document.getElementById('response').innerHTML = response.data.error;
                    document.getElementById('response').classList.remove('text-green-500');
                    document.getElementById('response').classList.remove('text-blue-500');
                    document.getElementById('response').classList.add('text-red-500');
                    document.getElementById('response').classList.add('font-normal');
                }
            }).catch((error) => {
                console.log(error)
            })

        }

    }

    /**
   * Handel Submit Form For USerName 
   */
    const handelForm = (event) => { // for handeling Form inputs
        event.preventDefault()
        if (UserLogin.username.trim() === "") {
            document.getElementById('response').innerHTML = "Username is Required !!";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');
        } else {
            if (isUsernameValid(UserLogin.username) == "Enter Password To Go !!") {
                document.getElementById('response').innerHTML = isUsernameValid(UserLogin.username);
                document.getElementById('response').classList.remove('text-red-500');
                document.getElementById('response').classList.remove('text-blue-500');
                document.getElementById('response').classList.add('text-green-500');
                document.getElementById('response').classList.add('font-normal');
                document.getElementById('U_error').style.display = "none";
                // Hide Username And Password
                document.getElementById('username_input').style.display = "none";
                document.getElementById('username_label').style.display = "none";
                // Show Password label and inputs
                document.getElementById('pass_label').style.display = "flex";
                document.getElementById('pass_input').style.display = "flex";
                // Show Username label and inputs
                document.getElementById('on_password').style.display = "flex";
                document.getElementById('on_username').style.display = "none";

            } else {
                document.getElementById('response').innerHTML = isUsernameValid(UserLogin.username);
                document.getElementById('response').classList.remove('text-blue-500');
                document.getElementById('response').classList.remove('text-green-500');
                document.getElementById('response').classList.add('text-red-500');
                document.getElementById('response').classList.add('font-normal');
                document.getElementById('U_error').style.display = "block";
            }
        }
    }

    /**
     * Handel Show Username Again
     */
    const backToUsername = () => {
        document.getElementById('response').innerHTML = "Change Username To Go !!";
        document.getElementById('response').classList.remove('text-green-500');
        document.getElementById('response').classList.add('text-blue-500');
        // Hide Username And Password
        document.getElementById('username_input').style.display = "flex";
        document.getElementById('username_label').style.display = "flex";
        // Show Password label and inputs
        document.getElementById('pass_label').style.display = "none";
        document.getElementById('pass_input').style.display = "none";
        // Show Username label and inputs
        document.getElementById('on_password').style.display = "none";
        document.getElementById('on_username').style.display = "block";

    }
    /**
     * Handel Inputs
     */
    const handelInputs = (event) => {
        setUserLogin({ ...UserLogin, [event.target.id]: event.target.value })
    }
    return (
        <div className='p-2'>
            <form className="form-container" onSubmit={handelForm}>
                <div className='avatar-login bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 p-4 '>
                    <img src="../../images/trans.png" alt="Avatar" />
                </div>
                <div className="center"> <span className="font-bold text-blue-600 ">FUN </span><span className="font-bold text-red-500">LAB </span> &nbsp;<span className='font-bold'>LOGIN</span></div>
                <center id='response'>Enjoy Our Services at FUN LAB</center>
                <p>&nbsp;</p>
                <label id='username_label'>Username</label>
                <div className='inputs' id='username_input'>
                    <i className='fa fa-user-circle'></i>
                    <input type="text" id="username" onChange={handelInputs} value={UserLogin.username} placeholder='Enter Your Username' />
                </div>
                <small id="U_error" className='text-red-500 font-normal hidden'><i className='fa fa-info-circle'></i> Error Incorrect Username</small>
                <div className='flex justify-between align-center ' Style="display:none" id='pass_label'>

                    <label>Password</label>
                    <div className='forgot-passwords'>Forgot Password ?</div>
                </div>
                <div className='inputs ' Style="display:none" id="pass_input">
                    <i className='fa fa-key'></i>
                    <input type="password" id="password" onChange={handelInputs} value={UserLogin.password} placeholder='Enter Your Password' />
                </div>
                <small id="P_error" className='text-red-500 font-normal hidden'><i className='fa fa-info-circle'></i> Error Incorrect Password</small>

                <div id='on_password' className='flex justify-between items-center hidden'>
                    <div onClick={() => backToUsername()} className='text-sm text-blue-500 cursor-pointer font-normal hover:text-blue-400  py-2  rounded mt-4'>Change Username ? </div>
                    <button type='button' onClick={() => handelLogin()} className='bg-blue-500 hover:bg-blue-400 text-white  py-2 px-4 rounded mt-4'>Login <i className='fa fa-sign-in'></i></button>
                </div>
                <button className='bg-blue-500 hover:bg-blue-400 text-white w-full py-2 px-4 rounded mt-4' id='on_username'>Continue <i className='fa fa-arrow-right'></i></button>

            </form>
            <div className="form-container two">
                <center><Link to="/Join-Community"  className='create-account'>Join Our Community <i className='fa fa-arrow-right'></i></Link></center>
                <p align="center"><small>Sign Options</small></p>
                <p>&nbsp;</p>
                <div className='flex justify-between align-center gap-2'>
                    <button className='bg-red-500 hover:bg-red-400 text-white w-full  py-2 px-4 rounded'><i className='fa fa-brands fa-google'></i> Google</button>
                    <button className='bg-blue-500 hover:bg-blue-400 text-white w-full  py-2 px-4 rounded'><i className='fa fa-brands fa-facebook'></i> Facebook</button>
                </div>
            </div>
        </div>

    );
}
export default LoginPage;