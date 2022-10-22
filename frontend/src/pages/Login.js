import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div>
          <img src="./insta.png" alt="Instagram" />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id=""
            placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Mot de passe"
            autoComplete="password"
          />
          <button type="submit">Se connecter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
