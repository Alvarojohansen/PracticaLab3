import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const userRegisterHandler = () => {
    if( username.toLowerCase().includes("o") && username.length > 0){
      alert(
        "No puedes ingresar, ¡intenta con un usuario que no contenga la letra O o prueba rellenando los espacio!"
      )
    }else{
      alert("ingresado correctamente")
    }
  };

  return (
    <div>
      <input
        onChange={changeUsernameHandler}
        placeholder="Ingrese su usuario"
      />
      <button onClick={userRegisterHandler}>Registrarse</button>
      <div>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default Login;
