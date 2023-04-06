import React, { Component, useState, useEffect } from 'react';

import logo from '../../Images/logo.JPG'


function Header() {

    const [userId, setuserId] = useState('');
    const [userName, setUserName] = useState('');


    useEffect(() => {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");

        setuserId(userId);
        setUserName(userName);



    }, []);

    return (
        <div className='header'>
            <img src={logo} />

            <button>LogOut</button>
            <span style={{"float":"right","marginRight":"50px","marginTop":"15px","fontWeight":"500","fontSize":"20px"}}>{userName}</span>
           
            
            

        </div>

    )
}


export default Header;