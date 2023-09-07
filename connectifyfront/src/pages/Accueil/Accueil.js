import React, { useState } from 'react'
import './index.css'
import {
    Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Accueil = () => {
    // le chemin pour aller chercher une image ou video mis dans une variable
    const baseUrlFile = `${process.env.PUBLIC_URL}`

    const [formData, setFormData] = useState({
        email: '',
        sujet: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        sujet: '',
    });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const sujetRegex = /^[a-zA-Z0-9\s]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const validateSujet = (sujet) => {
        return sujetRegex.test(sujet);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, sujet } = formData;

        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!sujet) {
            newErrors.sujet = 'Sujet is required';
        } else if (!validateSujet(sujet)) {
            newErrors.sujet = 'Invalid sujet';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, you can submit the data or perform other actions here
            setTimeout(() => {
                toast.success('👍Votre message a été  bien envoyé', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            setFormData({
                email: '',
                sujet: '',
                message: '',
            })
        }
    };


    return (
        <>
            <ToastContainer />
            <header className="hero">

                <video autoPlay loop muted className="video-bg">
                    <source src={`${baseUrlFile}/videos/fd_accueil.mp4`} type="video/mp4" />
                </video>
                <nav>
                    <p className="logo">connectify</p>
                    <ul>
                        <li><a href="#" className="active">accueil</a></li>
                        <li><Link to="/login">connexion</Link></li>
                        <li><Link to="/inscription">inscription</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>connectify</h1>
                </div>
            </header>
            <main>
                <section className="welcome">
                    <h2>Bienvenue</h2>
                    <p>Harmonisez vos passios,partagez vos émotions avec Connectify !</p>
                </section>

                <section className="actuality">
                    <div className="actulity-block-image">
                        <img src={`${baseUrlFile}/images/fd_actualite.jpg`} alt='jeune homme' />
                    </div>
                    <div className="actuality-text">
                        <h2>Actualité</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur, ut! Dolorum dolore, facere perferendis eum sed deserunt
                            accusantium vero iure aliquam repellat! Cum temporibus itaque eaque
                            ab ipsam error dolore. Officia, dolores, beatae aspernatur ea quis
                            dolore magni nihil repudiandae itaque ratione dolorum inventore
                            obcaecati accusamus reprehenderit cumque labore, consectetur autem
                            earum adipisci est nisi. Dolorem provident veniam modi deleniti.
                            Doloremque, amet tempore nostrum aspernatur quae temporibus
                            distinctio praesentium! Ex voluptatum perspiciatis, minima
                            consectetur nemo nostrum suscipit perferendis dolores modi
                            aspernatur ea quae? Assumenda ea inventore sapiente sit eos enim?
                            Assumenda corporis nihil iste. Odit, explicabo, ipsam illo in omnis
                            perspiciatis quae labore odio magni id sit numquam consectetur?
                            Consequuntur suscipit nemo nulla quas. Sint praesentium ducimus at
                            unde saepe. Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nisi corrupti sunt ratione nam! Magnam ipsam accusantium
                            molestiae esse, impedit consequuntur nam aperiam suscipit ut vitae,
                            alias consequatur nemo dolores modi? Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Esse, harum optio voluptatum hic, ea
                            quia quaerat animi dolore placeat maxime eveniet suscipit modi iusto
                            repellendus, tenetur dolorem ex soluta delectus? Voluptate saepe
                            nisi a dolores nihil repellendus ex quasi. Repellat, voluptate
                            tempora! Quidem cumque iusto animi cum aperiam eius laboriosam at
                            atque, iure, neque provident ullam deserunt perspiciatis architecto
                            dolorum! Qui saepe itaque iste vitae debitis assumenda reprehenderit
                            quam quos pariatur facere consectetur rerum, illum rem sit
                            consequuntur odio beatae deleniti tenetur? Aliquid doloribus nostrum
                            eius ad, debitis repudiandae illo? Similique omnis porro inventore
                            quas odit nihil maiores atque enim dolorem nam minus natus molestias
                            aperiam dolore suscipit, architecto quae, modi, consectetur ex ullam
                            voluptate delectus ipsam? Labore, sit nesciunt. Cupiditate beatae
                            rem nisi natus totam doloribus, laboriosam, autem aliquid odit, nemo
                            esse sint. Autem numquam maxime aliquid odit molestias odio
                            accusamus ad explicabo iste quam ex fugit, magni suscipit.
                            Cupiditate, iste, omnis qui corporis, molestias harum est autem
                            consectetur impedit modi similique velit eum magnam esse recusandae
                            suscipit. Rem nam repellendus repellat natus dolor. Id perferendis
                            laborum labore eaque.
                        </p>
                    </div>
                </section>
                <section className="qui-sommes-nous">
                    <div className="qui-sommes-nous-text">
                        <h3>qui-sommes-nous</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur, ut! Dolorum dolore, facere perferendis eum sed deserunt
                            accusantium vero iure aliquam repellat! Cum temporibus itaque eaque
                            ab ipsam error dolore. Officia, dolores, beatae aspernatur ea quis
                            dolore magni nihil repudiandae itaque ratione dolorum inventore
                            obcaecati accusamus reprehenderit cumque labore, consectetur autem
                            earum adipisci est nisi. Dolorem provident veniam modi deleniti.
                            Doloremque, amet tempore nostrum aspernatur quae temporibus
                            distinctio praesentium! Ex voluptatum perspiciatis, minima
                            consectetur nemo nostrum suscipit perferendis dolores modi
                            aspernatur ea quae? Assumenda ea inventore sapiente sit eos enim?
                            Assumenda corporis nihil iste. Odit, explicabo, ipsam illo in omnis
                            perspiciatis quae labore odio magni id sit numquam consectetur?
                            Consequuntur suscipit nemo nulla quas. Sint praesentium ducimus at
                            unde saepe. Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nisi corrupti sunt ratione nam! Magnam ipsam accusantium
                            molestiae esse, impedit consequuntur nam aperiam suscipit ut vitae,
                            alias consequatur nemo dolores modi? Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Esse, harum optio voluptatum hic, ea
                            quia quaerat animi dolore placeat maxime eveniet suscipit modi iusto
                            repellendus, tenetur dolorem ex soluta delectus? Voluptate saepe
                            nisi a dolores nihil repellendus ex quasi. Repellat, voluptate
                            tempora! Quidem cumque iusto animi cum aperiam eius laboriosam at
                            atque, iure, neque provident ullam deserunt perspiciatis architecto
                            dolorum! Qui saepe itaque iste vitae debitis assumenda reprehenderit
                            quam quos pariatur facere consectetur rerum, illum rem sit
                            consequuntur odio beatae deleniti tenetur? Aliquid doloribus nostrum
                            eius ad, debitis repudiandae illo? Similique omnis porro inventore
                            quas odit nihil maiores atque enim dolorem nam minus natus molestias
                            aperiam dolore suscipit, architecto quae, modi, consectetur ex ullam
                            voluptate delectus ipsam? Labore, sit nesciunt. Cupiditate beatae
                            rem nisi natus totam doloribus, laboriosam, autem aliquid odit, nemo
                            esse sint. Autem numquam maxime aliquid odit molestias odio
                            accusamus ad explicabo iste quam ex fugit, magni suscipit.
                            Cupiditate, iste, omnis qui corporis, molestias harum est autem
                            consectetur impedit modi similique velit eum magnam esse recusandae
                            suscipit. Rem nam repellendus repellat natus dolor. Id perferendis
                            laborum labore eaque.
                        </p>
                    </div>
                    <div className="qui-qui-sommes-nous-block-image">
                        <img src={`${baseUrlFile}/images/fd_qsn.jpg`} alt='groupe de jeune' />
                    </div>
                </section>

                <section className="nous-contacter">
                    <div className="nous-contacter-block-image">
                        <img src={`${baseUrlFile}/images/fd_contact.jpg`} alt='enfant et casque' />
                    </div>
                    <div className="nous-contacter-form">
                        <h4 className='quisommesnous'>Nous Contacter ?</h4>
                        <div class="containerform">
                            <form onSubmit={handleSubmit}>
                                <div class="formblockcontainer">
                                    <label for="email">Email :</label>
                                    <input type="text"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange} />
                                    {errors.email && <p>{errors.email}</p>}
                                </div>

                                <div class="formblockcontainer">
                                    <label for="sujet">Sujet :</label>
                                    <input type="text"
                                        name="sujet"
                                        id="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange} />
                                    {errors.sujet && <p>{errors.sujet}</p>}
                                </div>

                                <div class="formblockcontainer">
                                    <label for="message">Messsage :</label>
                                    <textarea name="message" id="message" cols="30" rows="10" value={formData.message}
                                        onChange={handleChange}></textarea>
                                    <div class="formbtn">
                                        <button>valider</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <form action="Page Contact /">
                            <label htmlFor="email">email</label>
                            <input type="text" id="email" name="email" placeholder="Entrez vôtre email" />
                            <label htmlFor="subject">sujet</label> <textarea id="subject" name="subject" placeholder="Ecrivez vôtre sujet"></textarea>
                            <label htmlFor="message">Message</label> <textarea id="message" name="message" placeholder="Ecrivez vôtre message"></textarea>
                            <input type="submit" value="Submit" />
                        </form> */}
                    </div>
                </section>

            </main>
            <footer></footer>
        </>
    )
}

export default Accueil