import React from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

const NotFoundText = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ChuckNorrisImage = styled.img`
  max-width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
// Création d'un composant Styled Button
const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
  border-radius: 5px;
  text-decoration: none; /* Supprimer la décoration du lien */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Couleur de fond du bouton au survol */
  }
`;

const NotFoundPage = () => {
  return (
    <main>
      <NotFoundContainer>
        <NotFoundText>Oops! Page introuvable</NotFoundText>
        <ChuckNorrisImage
          src={`${process.env.PUBLIC_URL}/not_found.jpg`}
          alt="Chuck Norris"
        />
        {/* <Link to="/profil">Retour</Link> */}
        <StyledButton href="/profil">Retour</StyledButton>
      </NotFoundContainer>
    </main>
  )
}

export default NotFoundPage