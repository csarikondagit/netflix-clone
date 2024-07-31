import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {

    const [show,handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleshow(true);
            }else(handleshow(false));
        });
       
        
    }, [])
    return (
        <div className={`navbar ${show &&  "nav__black"}`}>
            {/* Netflix image */}
            <img
            className="nav__logo"
               src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
               alt="NETFLIX"
            />   
            {/* avatar image */}
            <img
            className="nav__avatar"
               src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
               alt="AVATAR"
            /> 
      
        </div>
    )
}

export default Navbar;
