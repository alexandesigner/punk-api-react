import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
`;

const Figure = styled.figure`
  margin: -50px 0 0 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.4em;
`;

const Button = styled.div`
  background: #E15D29;
  color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  a {
    padding: 10px 20px;
    display: block;
    text-decoration: none;
    color: #fff;
    text-decoration: uppercase;
  }
`;

export default () => (
  <Container>
    <Figure>
      <img src="logo.png" width="280" alt="Logo Fractal Tecnologia" />
    </Figure>
    <Title>Teste Front-end</Title>
    <Button>
      <Link to="/cervejas">Acessar o teste</Link>
    </Button>
  </Container>
);