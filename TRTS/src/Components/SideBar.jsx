import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Sidebar( {children} ) {
    const [userName, setUserName] = useState('User name');

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            fetch(`http://localhost:5000/users/${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.name) {
                        setUserName(data.name); // Asumiendo que 'name' es parte de la respuesta
                    }
                })
                .catch(error => console.error(error));
        }
    }, []);

    return (
      <div className="col-span-2 bg-[#85796F] h-full w-full flex flex-col items-center justify-center text-white">
          <strong><h1 className=" text-3xl">TRTS</h1></strong><br /><br />
          <img src="./icon_person.svg" className="bg-[#B0A9A4] w-40 h-40 object-cover rounded-full"/><br />
          <strong><label htmlFor="" className="text-lg">{userName}</label></strong><br /><br />
          {children}
          <Link to="/" className="w-40 h-10 flex items-center justify-center border-l border-b border-black text-xl text-white font-bold py-2 px-4 rounded">Log out</Link>
      </div>
    )
  }
  
  export default Sidebar;