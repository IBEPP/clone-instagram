import React from "react";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div>
          <img src="./insta.png" alt="Instagram" />
        </div>
        <form>
          <h2>Inscrivez-vous pour voir les photos et vidéos de vos amis. </h2>
          <div>
            <input
              type="text"
              name="email"
              id=""
              placeholder="Numero mobile ou e-mail"
            />
            <input type="text" name="email" id="" placeholder="Nom complet" />
            <input
              type="text"
              name="email"
              id=""
              placeholder="Nom d'utilisateur"
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Mot de passe"
            />
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
