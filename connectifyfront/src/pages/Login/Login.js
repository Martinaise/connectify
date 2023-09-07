import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { login } from '../../redux/slices/auth/authSlice';
import "./login.css"
const Login = () => {
    const issetToken = useSelector(state => state.auth.user?.token);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        //check if user already authenticated return to /profil
        if (issetToken) {
            navigate("/profil")
        }
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        (async () => {
            const user = {
                email, password
            }
            await dispatch(login(user))
            navigate("/profil")
        })()
        // dispatch
    }, [dispatch, email, password]);


    return (
        <main>
            <div>
                <img src={`${process.env.PUBLIC_URL}/fd_connexion.jpg`} alt="connexion" />
            </div>
            <div class="containerform">
                <form onSubmit={handleSubmit}>
                    <div class="formblockcontainer">
                        <label for="email">Email :</label>
                        <input type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="formblockcontainer">
                        <label for="password">Mot de passe :</label>
                        <input type="password" placeholder="mot de passe" id='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div class="formblockcontainer">
                        <div class="formbtn">
                            <button>valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login