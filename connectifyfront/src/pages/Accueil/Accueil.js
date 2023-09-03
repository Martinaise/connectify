import React from 'react'
import './index.css'

const Accueil = () => {
    // le chemin pour aller chercher une image ou video mis dans une variable
    const baseUrlFile = `${process.env.PUBLIC_URL}`
    console.log("baseUrlFile", baseUrlFile)
    return (
        <>
            <header class="hero">

                <video autoPlay loop muted class="video-bg">
                    <source src={`${baseUrlFile}/videos/fd_accueil.mp4`} type="video/mp4" />
                </video>
                <nav>
                    <p class="logo">connectify</p>
                    <ul>
                        <li><a href="#" class="active">accueil</a></li>
                        <li><a href="#">connexion</a></li>
                        <li><a href="#">inscription</a></li>
                    </ul>
                </nav>
                <div class="content">
                    <h1>connectify</h1>
                </div>
            </header>
            <main>
                <section class="welcome">
                    <h2>Bienvenue</h2>
                    <p>Harmonisez vos passios,partagez vos émotions avec Connectify !</p>
                </section>

                <section class="actuality">
                    <div class="actulity-block-image">
                        <img src={`${baseUrlFile}/images/fd_actualite.jpg`} alt='jeune homme' />
                    </div>
                    <div class="actuality-text">
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
                <section class="qui-sommes-nous">
                    <div class="qui-sommes-nous-text">
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
                    <div class="qui-qui-sommes-nous-block-image">
                        <img src={`${baseUrlFile}/images/fd_qsn.jpg`} alt='groupe de jeune' />

                    </div>
                </section>

                <section class="nous-contacter">
                    <div class="nous-contacter-block-image">
                    
                        <img src={`${baseUrlFile}/images/fd_contact.jpg`} alt='enfant et casque' />
                        
                    </div>
                    <div class="nous-contacter-form">
                        <h4>nous contacter ?</h4>

                        <form action="Page Contact /">
                            <label for="email">email</label>
                            <input type="text" id="email" name="email" placeholder="Entrez vôtre email" />
                            <label for="subject">sujet</label> <textarea id="subject" name="subject" placeholder="Ecrivez vôtre sujet"></textarea>
                            <label for="message">Message</label> <textarea id="message" name="message" placeholder="Ecrivez vôtre message"></textarea>
                            <input type="submit" value="Submit" />

                        </form>
                    </div>
                </section>


                <section class="nous-contacter">
                    <div class="nous-contacter-block-image">
                        <img src="./Page Contact /fd_contact.jpg " alt="enfant et casque" />
                    </div>
                    <div class="nous-contacter-form">
                        <h4>nous contacter ?</h4>

                        <form action="Page Contact /">
                            <label for="email">email</label>
                            <input type="text" id="email" name="email" placeholder="Entrez vôtre email" />
                            <label for="subject">sujet</label> <textarea id="subject" name="subject" placeholder="Ecrivez vôtre sujet"></textarea>
                            <label for="message">Message</label> <textarea id="message" name="message" placeholder="Ecrivez vôtre message"></textarea>
                            <input type="submit" value="Submit" />

                        </form>
                    </div>
                </section>
            </main>
            <footer></footer>
        </>
    )
}

export default Accueil