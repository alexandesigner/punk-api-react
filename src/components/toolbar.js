import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f1f1f1;
`;

const Title = styled.h1`
  font-size: 2.4em;
  font-family: 'Concert One', cursive;
  margin: 0 15px;
  @media (max-width: 520px) {
    font-size: 1.8em;
  }
`;

const Button = styled.button`
  font-size: 1em;
  color: #E15D29;
  background: none;
  border: 1px solid #E15D29;
  padding: 5px 12px;
  margin: 0 15px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-family: 'Concert One', cursive;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: transparent;
    border-color: #000;
    color: #000;
  }
`;

const Toolbar = props => (
  <Header>
    <Title>{props.title}</Title>
    {props.isDetails ? (<Button onClick={() => props.history.goBack()}>back</Button>) : ('')}
  </Header>
);

export default Toolbar;