import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://44.196.3.52:3006/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                window.location.href = '/';
            } else {
                const data = await response.json();
                alert(data.message || "Error creating account");
            }
        } catch (error) {
            console.error('Error al crear la cuenta:', error);
            alert("An error occurred while creating the account.");
        }
    };

    return (
        <div className="h-full w-1/2 rounded-r-2xl flex flex-col items-center justify-center">
            <strong><h1 className="justify-items-start">Create your free account</h1></strong><br />
            <form onSubmit={handleSubmit} className="w-[60%] flex flex-col items-start">
                <strong><label htmlFor="name" className="text-left">Name</label></strong>
                <input 
                    type="text" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Enter your full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <strong><label htmlFor="email">Email</label></strong>
                <input 
                    type="email" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <strong><label htmlFor="password" className="text-left">Password</label></strong>
                <input 
                    type="password" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <strong><label htmlFor="confirmPassword">Confirm password</label></strong>
                <input 
                    type="password" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Confirm your password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /><br /><br />
                <button type="submit" className="bg-[#85796F] rounded-lg flex self-center w-40 items-center justify-center h-9 text-white font-bold">Create account</button><br />
                <div className="flex self-center text-xs">
                    <label htmlFor="" className="text-[#00000080]">Already have an account?</label>
                    <Link to="/" className="text-[#FFFFFF80] border-b border-[#FFFFFF80] cursor-pointer ml-2">Log in</Link>
                </div>    
            </form>
        </div>
    );
}

export default RegisterForm;