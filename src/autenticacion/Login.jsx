import React, { useState } from "react";

export default function Login() {
  return (
    <div className="h-screen w-full flex ">
      <div className="w-1/2">
        <div className="flex space-x-3 justify-end my-4 mx-4 ">
          <h2>¿No tienes cuenta?</h2>
          <h2 className="text-red-500 underline">Registrarse</h2>
        </div>
        <div className="flex align-center justify-center flex-col h-[600px]">
        <div className="flex items-center justify-around flex-col h-[300px]">
          <h1 className="text-2xl font-semibold">Iniciar Sesión</h1>
          <div className="flex flex-col justify-between h-[130px]">
            <div className="flex flex-col bg-[#f3f4f6] py-1 px-2 w-[400px] rounded-md">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="name"
                type="email"
                required
                placeholder="example.email@gmail.com"
                className="bg-transparent "
              />
            </div>
            <div className="flex flex-col bg-[#f3f4f6] py-1 px-2 w-[400px] rounded-md">
              <label htmlFor="email">Password</label>
              <input
                id="password"
                name="name"
                type="password"
                required
                placeholder="Enter at least 8+ characters"
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
        </div>
        
        
      </div>
      <div div className=" w-1/2 bg-[#aa1916] ">
        <div></div>
      </div>
    </div>
  );
}
