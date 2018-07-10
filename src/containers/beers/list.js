import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBeers
} from '../../modules/beers';

// Styles
const Beers = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 25px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

const Name = styled.h2`
  font-family: 'Miso';
  font-size: 1.8em;
  margin: 5px 0;
`;

const Tag = styled.span`
  font-size: 1.2em;
`;

const Loading = styled.div`
  font-size: 2em;
`;

// Create a class to BeersList Component
class BeersList extends Component {
  componentWillMount() {
    // Fetch all beers
    this.props.fetchBeers();
  }
  selectedBeer(beer) {
    this.props.history.push(`/cervejas/${beer.id}`)
  }
  render() {
    const isLoading = this.props.isLoading
    return (
      <div>
        {isLoading ? (<Loading>Carregando...</Loading>) : (<Beers>
          {this.props.beersList.map(beer => {
            const { id, name, tagline, } = beer;
            return (
              <Item onClick={() => this.selectedBeer(beer)} key={id}>
                <Name>{name}</Name>
                <Tag>{tagline}</Tag>
              </Item>
            );
          })}
        </Beers>)}
      </div>
    );
  }
}

const mapStateToProps = ({ beers }) => ({
  beersList: beers.beersList,
  isLoading: beers.isLoading,
  errorMessage: beers.errorMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeers
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersList);