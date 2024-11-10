import React, { useState } from "react";

export default function Login() {
  return (
    <div className="h-screen w-full flex ">
      <div className="w-1/2">
        <div className="flex space-x-3 justify-end my-4 mx-4 ">
          <h2>¿No tienes cuenta?</h2>
          <h2 className="text-red-500 underline">Registrarse</h2>
        </div>

        <div className="flex items-center justify-center">
        <h1>Iniciar Sesión</h1>
        </div>

        <div className="">
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
        </div>

      </div>
      <div div className=" w-1/2 bg-[#aa1916] ">
        <div></div>
      </div>
    </div>
  );
}
