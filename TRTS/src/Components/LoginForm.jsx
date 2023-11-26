import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Resetea los errores previos

        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Suponiendo que 'data' contiene el user_id
                localStorage.setItem('user_id', data.user_id);
                window.location.href = '/containers';
            }else {
                // Mostrar mensaje de error
                setError(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError("An error occurred while logging in.");
        }
    };

    return (
        <div className="h-full w-1/2 rounded-r-2xl flex flex-col items-center justify-center">
            <strong><h1 className="justify-items-start">Log in</h1></strong><br />
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="w-[60%] flex flex-col items-start">
                <strong><label htmlFor="email" className="text-left">Email</label></strong>
                <input 
                    type="email" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <strong><label htmlFor="password">Password</label></strong>
                <input 
                    type="password" 
                    className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <button type="submit" className="bg-[#85796F] rounded-lg flex self-center w-40 items-center justify-center h-9 text-white font-bold">Log in</button><br />
                <label htmlFor="" className="flex self-center text-xs text-[#00000080]">Don't you have an account yet?</label> 
                <Link to="/register" className="flex self-center text-xs text-[#FFFFFF80] border-b border-[#FFFFFF80] cursor-pointer">Create account</Link>    
            </form>
        </div>
    );
}

export default LoginForm;