import React from 'react';

function Register() {
  return (
    <div>
      <h1>Connexion</h1>
      <form>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname" />
        </div>


        <div>
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' />
        </div>
        <div>
          <label htmlFor="">Genre</label>
          <label htmlFor="radio">Homme</label>
          <input type="radio" name="gender" id="radio" />

          <label htmlFor="radio">Femme</label>
          <input type="radio" name="gender" id="radio" />
        </div>
        <div>

          <label htmlFor="password">Mot de passe</label>
          <input type="password" name='password' id='password' />
        </div>

        <div>
          <label htmlFor="verifypassword">Vérifiez mot de passe</label>
          <input type="password" name='verifypassword' id='verifypassword' />
        </div>

        <button>Valider</button>

      </form>
    </div>
  );
}

export default Register;