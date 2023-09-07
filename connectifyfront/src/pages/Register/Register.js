import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { RegistUser } from '../../services/register/register';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Register = () => {
    const issetToken = useSelector(state => state.auth.user?.token);
    useEffect(() => {
        //check if user already authenticated return to /profil
        if (issetToken) {
            navigate("/profil")
        }
    }, []);
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        lastname: "",
        firstname: "",
        email: "",
        gender: "",
        password: ""
    })
    const [errors, setErrors] = useState([])

    const fieldsRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Un mot de passe doit contenir au moins 8 caractères, avec au moins une lettre majuscule, une lettre minuscule et un chiffre.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordNoMatch, setPasswordNoMatch] = useState()

    const handleInput = (e) => {
        const { name, value } = e.target; // Destructuration de e.target

        // Copie de l'objet newUser
        const newUserCopy = { ...newUser };

        // Mise à jour de la propriété correspondant à 'name' avec la valeur 'value'
        newUserCopy[name] = value;

        // Mise à jour de l'état avec la nouvelle copie de newUser
        setNewUser(newUserCopy);

    }
    const validateForm = () => {
        // Valider les champs avec les regex
        if (!fieldsRegex.test(newUser.lastname)) {
            // Afficher un message d'erreur pour le nom
            setErrors([...errors, "votre nom est incorrect "])
            return errors;
        }

        if (!fieldsRegex.test(newUser.firstname)) {
            // Afficher un message d'erreur pour le prénom
            setErrors([...errors, "votre prenom est incorrect "])
            return errors;
        }

        if (!emailRegex.test(newUser.email)) {
            // Afficher un message d'erreur pour l'email
            setErrors([...errors, "votre email est incorrect "])
            return;
        }

        if (!passwordRegex.test(newUser.password)) {
            // Afficher un message d'erreur pour le mot de passe
            setErrors([...errors, "votre mot de passe est incorrect "])
            return errors;
        }

        if (newUser.password !== confirmPassword) {
            // Afficher un message d'erreur pour la vérification du mot de passe
            setErrors([...errors, "votre mot de passe ne sont pas identiques est incorrect "])
            return errors;
        }
    }
    const handleForm = async (e) => {
        e.preventDefault()
        //vérifier si les mots de passes sont identiques
        if (newUser.password !== confirmPassword) {
            setPasswordNoMatch('Les mots de passe ne correspondent pas.');
            return
        }
        //cette fonction valide chaque champ du formulaire s'il ya une erreur
        // on quitte handleForm
        validateForm();
        //s'il y'a quelque chose dans le tableau des erreurs ons sort de la fonction handleForm
        if (errors.length > 0) {
            return
        }

        const response = await RegistUser(newUser)
        if (response.status === 201) {
            setTimeout(() => {
                toast.success('👍Votre inscription s\'est bien passé', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            setTimeout(() => { navigate("/login") }, 3000);
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleForm}>
                <FormContainer>
                    <Label>Nom:</Label>
                    <Input type="text" placeholder="Nom" name='lastname' onChange={handleInput} />
                </FormContainer>
                <FormContainer>
                    <Label>Prénom:</Label>
                    <Input type="text" placeholder="Prénom" name='firstname' onChange={handleInput} />
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <Input type='email' id='email' name='email' onChange={handleInput} />
                </FormContainer>
                <FormContainer>
                    <Label>
                        Genre
                    </Label>
                    <FormContainer>
                        <Label htmlFor='gender'>Homme</Label>
                        <Input name='gender' type='radio' value="homme" id='gender' onChange={handleInput} />
                    </FormContainer>
                    <FormContainer>
                        <Label htmlFor='gender'>Femme</Label>
                        <Input name='gender' type='radio' value="femme" id='gender' onChange={handleInput} />
                    </FormContainer>
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='password'>Mot de passe </Label>
                    <Input type='password' name='password' onChange={handleInput} />
                </FormContainer>
                <FormContainer>
                    <Label htmlFor='verifypassword'>Vérification de mot de passe</Label>
                    <Input type='password' id='verifypassword' name='verifypassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p>{passwordNoMatch}</p>
                </FormContainer>
                <button>
                    s'inscrire
                </button>
            </form >
        </div >
    )
}

export default Register