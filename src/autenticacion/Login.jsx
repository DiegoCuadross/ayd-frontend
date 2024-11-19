import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2">
        <div className="flex space-x-3 justify-end my-4 mx-4">
          <h2>¿No tienes cuenta?</h2>
          <h2 className="text-[#aa1916] underline cursor-pointer">
            Registrarse
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col h-[600px]">
          <div className="flex items-center justify-around flex-col h-[300px]">
            <h1 className="text-2xl font-semibold">Iniciar Sesión</h1>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col bg-[#f3f4f6] py-1 px-2 w-[400px] rounded-md">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="example.email@gmail.com"
                  className="bg-transparent"
                />
              </div>

              <div className="relative flex flex-col bg-[#f3f4f6] py-1 px-2 w-[400px] rounded-md">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter at least 8+ characters"
                  className="bg-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <h2 className="text-right text-[#aa1916]">
                Recuperar contraseña
              </h2>
              <div className="bg-red-600 text-white text-center p-2 rounded-md">Sign in</div>
            </div>
            
          </div>
        </div>
      </div>

      
      <div className="w-1/2 bg-[#aa1916] flex items-center justify-center">
      <img 
          src="/img/logo_vertical.png" 
          alt="Imagen de ejemplo" 
          className="h-[300px] object-contain"
        />
      </div>
    </div>
  );
}
