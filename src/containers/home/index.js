import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const Figure = styled.figure`
  margin: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

const Content = styled.div`
  background: #f1f1f1;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 520px) {
    width: 100%;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.4em;
  font-family: 'Concert One', cursive;
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
    <Content>
      <Title>Front-end Test</Title>
      <Button>
        <Link to="/beers">Access to list of beers</Link>
      </Button>
    </Content>
  </Container>
);