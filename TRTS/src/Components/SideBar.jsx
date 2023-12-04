import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { data } from "autoprefixer";

function Sidebar( {children} ) {
    const [userName, setUserName] = useState('User name');

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            fetch(`http://127.0.0.1:3000/user/${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setUserName(data.name);
                    } else {
                        setUserName('Name not found');
                    }
                })
                .catch(error => {
                    console.error('Error al obtener datos del usuario:', error);
                    setUserName('Error al cargar');
                });
        } else {
            setUserName('Usuario no identificado');
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