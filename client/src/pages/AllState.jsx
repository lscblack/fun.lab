// AllState.js
import React, { useState } from 'react';

function AllState() {
    const [UserRegister, setUserRegister] = useState({
        fname:'',
        lname:'',
        username:'',
        email:'',
        phone:'',
        password:''
    });

    const [UserLogin, setUserLogin] = useState({
        username:'',
        password:''
    });

    return {
        UserLogin,
        setUserLogin,
        UserRegister,
        setUserRegister
    };
}

export default AllState;
