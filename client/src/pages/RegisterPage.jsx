import React, { useState, useEffect, useRef } from 'react'
import '../assets/styles/RegisterPage.css'
import AllSate from './AllState'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function RegisterPage() {
    //naviagtion
    const goto = useNavigate()
    //allow crediants
    axios.defaults.withCredentials = true

    // For Account Creation
    const { UserRegister, setUserRegister } = AllSate();
    const [otp, setOtp] = useState('');
    const otpInputsRef = useRef([]);




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
                    return "Finish Account Creation !!"
                }
            } else {
                return "Username must be 4 to 50 characters long"
            }
        } else {
            return "<small>username contains spaces or characters other than . and _characters</small> "
        }
    }
    //********** Validate Names ********* */
    function namesValidation(name) {
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (nameRegex.test(name)) {
            return true
        } else {
            return false
        }


    }
    //********** Validate Email ********* */
    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            return "Valid Email"
        } else {
            return "Invalid Email !"
        }


    }
    //********** Validate Phone ********* */
    function isPhoneValid(phone) {
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        if (phoneRegex.test(phone)) {
            return true
        } else {
            return false
        }


    }
    //********** Validate Password ********* */
    function isPasswordStrong(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (passwordRegex.test(password)) {
            return true
        } else {
            return false
        }


    }

    //** handel form
    const handelForm = (event) => {
        event.preventDefault();
        if (UserRegister.fname.trim() == "") {
            document.getElementById('response').innerHTML = "First Name Required !!";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');
        } else if (UserRegister.lname.trim() == "") {
            document.getElementById('response').innerHTML = "Last Name Required !!";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');

        } else if (isUsernameValid(UserRegister.username) != "Finish Account Creation !!") {
            document.getElementById('response').innerHTML = isUsernameValid(UserRegister.username);
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');

        } else if (!namesValidation(UserRegister.fname)) {
            document.getElementById('response').innerHTML = "Invalid First Name Use Real Name";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');

        } else if (!namesValidation(UserRegister.lname)) {
            document.getElementById('response').innerHTML = "Invalid Last Name Use Real Name";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');

        } else if ((UserRegister.lname.length < 3 || UserRegister.lname.length > 50) || (UserRegister.fname.length < 3 || UserRegister.fname.length > 50)) {
            document.getElementById('response').innerHTML = "One Name must be 3 to 50 characters long";
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.add('text-red-500');
            document.getElementById('response').classList.add('font-normal');

        } else {
            document.getElementById('response').innerHTML = "Finish Account Creation !!";
            document.getElementById('response').classList.remove('text-blue-500');
            document.getElementById('response').classList.remove('text-red-500');
            document.getElementById('response').classList.remove('text-green-500');
            document.getElementById('response').classList.add('hidden');
            // ----------------- hide Frist Form and show second
            document.querySelectorAll('.FirstForm').forEach(element => {
                element.classList.add("hidden");
            });
            document.querySelectorAll('.SecondForm').forEach(element => {
                element.classList.remove("hidden");
            });

            // ******* Show on_names and hide on_emails



        }
    }

    const handelRegister = () => {
        if (isEmailValid(UserRegister.email) != "Valid Email") {
            document.getElementById('email_error').innerHTML = `Invalid Email <i class="fa fa-question-circle" aria-hidden="true"></i>`;
            document.getElementById('email_error').classList.remove('text-green-600');
            document.getElementById('email_error').classList.remove('text-blue-600');
            document.getElementById('email_error').classList.add('text-red-600');
        } else if (!isPhoneValid(UserRegister.phone)) {

            //-- emails
            document.getElementById('email_error').innerHTML = `Valid Email <i class="fa fa-check-circle" aria-hidden="true"></i>`;
            document.getElementById('email_error').classList.remove('text-red-600');
            document.getElementById('email_error').classList.remove('text-blue-600');
            document.getElementById('email_error').classList.add('text-green-600');

            //-------for Phone
            document.getElementById('phone_error').innerHTML = `Invalid Number Ex:+code XXXXXXXXX ! <i class="fa fa-question-circle" aria-hidden="true"></i>`;
            document.getElementById('phone_error').classList.remove('text-green-600');
            document.getElementById('phone_error').classList.remove('text-blue-600');
            document.getElementById('phone_error').classList.add('text-red-600');
        } else if (!isPasswordStrong(UserRegister.password)) {
            // For Phone 
            document.getElementById('phone_error').innerHTML = `Phone <i class="fa fa-check-circle" aria-hidden="true"></i>`;
            document.getElementById('phone_error').classList.remove('text-red-600');
            document.getElementById('phone_error').classList.remove('text-blue-600');
            document.getElementById('phone_error').classList.add('text-green-600');

            // --- for Password Number
            document.getElementById('password_error').innerHTML = `<i class="fa fa-question-circle" aria-hidden="true"></i> Invalid Password Ex: CQ12#@!Djo!`;
            document.getElementById('password_error').classList.remove('text-green-600');
            document.getElementById('password_error').classList.remove('text-blue-600');
            document.getElementById('password_error').classList.add('text-red-600');
            document.getElementById('password_error').classList.add('font-normal');
        } else {
            // For Phone 
            document.getElementById('phone_error').innerHTML = ` <i class="fa fa-check-circle" aria-hidden="true"></i> Valid Phone`;
            document.getElementById('phone_error').classList.remove('text-red-600');
            document.getElementById('phone_error').classList.remove('text-blue-600');
            document.getElementById('phone_error').classList.add('text-green-600');


            //-- emails
            document.getElementById('email_error').innerHTML = ` <i class="fa fa-check-circle" aria-hidden="true"></i> Valid Email`;
            document.getElementById('email_error').classList.remove('text-red-600');
            document.getElementById('email_error').classList.remove('text-blue-600');
            document.getElementById('email_error').classList.add('text-green-600');

            //-------for Password Number
            document.getElementById('password_error').innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i> Password!`;
            document.getElementById('password_error').classList.remove('text-blue-600');
            document.getElementById('password_error').classList.remove('text-red-600');
            document.getElementById('password_error').classList.add('text-green-600');
            document.getElementById('password_error').classList.add('font-normal');

            //hide first and second by adding hidden class and show third from by removing hiden class
            document.querySelectorAll('.FirstForm').forEach(element => {
                element.classList.add("hidden");
            });
            document.querySelectorAll('.SecondForm').forEach(element => {
                element.classList.add("hidden");
            });
            document.querySelectorAll('.ThirdForm').forEach(element => {
                element.classList.remove("hidden");
            });
        }


    }
    //------------------show Usernames Again
    const backToUsername = () => {
        document.querySelectorAll('.SecondForm').forEach(element => {
            element.classList.add("hidden");
        });
        document.querySelectorAll('.FirstForm').forEach(element => {
            element.classList.remove("hidden");
        });
        document.getElementById('response').classList.remove('hidden');
    }
    const handelInputs = (event) => {
        setUserRegister({ ...UserRegister, [event.target.id]: event.target.value })
    }
    //------------------show Email Again
    const backToEmails = () => {
        document.querySelectorAll('.SecondForm').forEach(element => {
            element.classList.remove("hidden");
        });
        document.querySelectorAll('.FirstForm').forEach(element => {
            element.classList.add("hidden");
        });
        document.querySelectorAll('.ThirdForm').forEach(element => {
            element.classList.add("hidden");
        });

        document.getElementById('response').classList.remove('hidden');
    }


    // make first otp input focused
    useEffect(() => {
        // Focus the first input element when the component mounts
        if (otpInputsRef.current.length > 0) {
            otpInputsRef.current[0].focus();
        }
    }, []);

    // hadel otp inputs 
    const handleOpt = (index, value) => {
        setOtp((prevOtp) => {
            let newOtp = prevOtp;
            if (value === 'Backspace') {
                newOtp = prevOtp.slice(0, -1); // Remove the last character
                if (index > 0) {
                    otpInputsRef.current[index - 1].focus(); // Focus on the previous input
                }
            } else if (value.length === 1) {
                newOtp += value; // Add the typed character to OTP
                if (index < otpInputsRef.current.length - 1) {
                    otpInputsRef.current[index + 1].focus(); // Focus on the next input
                }
            }
            return newOtp;
        });
    };
    // finish account creation
    const SaveUser = () => {

    }


    return (
        <div className='flex justify-center flex-wrap gap-4 align-middle p-2 items-center'>
            <form className="form-container-reg" onSubmit={handelForm}>
                <div className='avatar-login bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 p-4 '>
                    <img src="../../images/trans.png" alt="Avatar" />
                </div>
                <div className="center"> <span className='font-bold'>JOIN   </span>&nbsp;<span className="font-bold text-blue-600 ">FUN </span><span className="font-bold text-red-500">LAB </span></div>
                <center id='response'>Be Apart Of Our Global Community</center>
                <p>&nbsp;</p>
                {/* First Form */}
                <div className='FirstForm ' >
                    <label>First Name</label>
                    <div className='inputs' >
                        <i className='fa fa-address-card'></i>
                        <input type="text" id="fname" onChange={handelInputs} value={UserRegister.fname} placeholder='Enter Your First Name' />
                    </div>

                    <label>Last Name</label>
                    <div className='inputs' >
                        <i className='fa fa-id-card'></i>
                        <input type="text" id="lname" onChange={handelInputs} value={UserRegister.lname} placeholder='Enter Your Last Name' />
                    </div>

                    <label>User Name</label>
                    <div className='inputs' >
                        <i className='fa fa-user'></i>
                        <input type="text" id="username" onChange={handelInputs} value={UserRegister.username} placeholder='Enter Your Username' />
                    </div>
                </div>
                {/* Second Form */}
                <div className='SecondForm hidden' >
                    <div className='flex justify-between align-center' >

                        <label>Email</label>
                        <div className='text-blue-600 text-xs font-normal mt-6' id='email_error'>Valid Email ?</div>
                    </div>
                    <div className='inputs ' >
                        <i className='fa fa-envelope'></i>
                        <input type="email" id="email" onChange={handelInputs} value={UserRegister.email} placeholder='Enter Your Email' />
                    </div>
                    <div className='flex justify-between align-center ' >

                        <label>Phone</label>
                        <div className='text-blue-600 text-xs font-normal mt-6' id='phone_error'>Valid Phone Number ?</div>
                    </div>
                    <div className='inputs ' >
                        <i className='fa fa-phone'></i>
                        <input type="number" id='phone' onChange={handelInputs} value={UserRegister.phone} placeholder='Enter Your Phone +code XXX XXX XXX' />
                    </div>
                    <div className='flex justify-between align-center ' >

                        <label>Password</label>
                        <div className='text-blue-600 text-xs font-normal mt-6' id='password_error'>Password Strength ?</div>
                    </div>
                    <div className='inputs ' >
                        <i className='fa fa-lock'></i>
                        <input type="password" id="password" onChange={handelInputs} value={UserRegister.password} placeholder='Enter Your Password' />
                    </div>

                </div>
                {/* Third Form */}
                <div className='ThirdForm hidden' >
                    <div className='flex justify-between align-center' >

                        <label className='font-bold'>OTP<small className='text-xs font-normal'>(One Time Password)</small></label>
                        <div className='text-blue-600 text-xs font-normal mt-6' id='opt_error'>Enter OTP Code </div>
                    </div>
                    <div className='inputs ' >
                        <div className='flex justify-between items-center w-full'>
                            {Array.from({ length: 6 }, (_, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    maxLength="1"
                                    className='otp'
                                    ref={(input) => (otpInputsRef.current[index] = input)}
                                    value={otp[index] || ''}
                                    onKeyDown={(event) => handleOpt(index, event.key)}
                                />
                            ))}
                        </div>
                    </div>
                    <small>OTP Was Sent your Email check Inbox Or Spam</small>

                </div>
                <div className='flex justify-between items-center SecondForm hidden'>
                    <div onClick={() => backToUsername()} className='text-sm text-blue-500 cursor-pointer font-normal hover:text-blue-400  py-2  rounded mt-4'>Change Username ? </div>
                    <button type='button' onClick={() => handelRegister()} className='bg-blue-500 hover:bg-blue-400 text-white  py-2 px-4 rounded mt-4'>Continue <i className='fa fa-sign-in'></i></button>
                </div>
                <div className='flex justify-between items-center ThirdForm hidden'>
                    <div onClick={() => backToEmails()} className='text-sm text-blue-500 cursor-pointer font-normal hover:text-blue-400  py-2  rounded mt-4'>Change Email ? </div>
                    <button type='button' onClick={() => SaveUser()} className='bg-green-500 hover:bg-green-400 text-white  py-2 px-4 rounded mt-4'>Done <i className='fa fa-user-plus'></i></button>
                </div>
                <button className='bg-blue-500 hover:bg-blue-400 text-white w-full py-2 px-4 rounded mt-4 FirstForm' id='on_emails'>Continue <i className='fa fa-arrow-right'></i></button>

            </form>
            <div className="form-container-reg two">
                <center><Link to="/Already-A-Member" className='create-account'>Already Have Account <i className='fa fa-arrow-right'></i></Link></center>
                <p align="center"><small>Today is your day to bring change to the world with <span className="font-bold text-blue-600 ">FUN </span><span className="font-bold text-red-500">LAB. </span> Join us</small></p>
                <p>&nbsp;</p>
                <div className="flex justify-between">
                    <a href="https://lscblack.github.io/portfolio/" className="text-xs hover:text-blue-600"><i className="fa fa-user-circle"></i> Author  </a>
                    <a href="#" className="text-xs hover:text-blue-600"><i className="fa fa-info-circle"></i> About </a>
                    <a href="#" className="text-xs hover:text-blue-600"><i className="fa fa-phone"></i> Contact</a>
                </div>
                <p>&nbsp;</p>
                <p align="center" className="text-sm font-normal">Copyright © 2023. All rights reserved.</p>
            </div>
        </div>

    );
}
export default RegisterPage;