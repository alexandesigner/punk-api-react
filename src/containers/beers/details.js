import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBeerDetails
} from '../../modules/beers';

// Styles
const Container = styled.div`
  height: 100%;
  margin: 0;
`;

const Beer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

const Name = styled.h2`
  font-size: 1.8em;
  font-family: 'Miso';
  margin: 0;
`;

const Tag = styled.span`
  font-size: 1em;
  color: #666;
`;

const Description = styled.p`
  font-size: 1.2em;
`;

const Image = styled.figure`
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Loading = styled.div`
  font-size: 2em;
`;


// Create a class to BeerDetails Component
class BeerDetails extends Component {
  componentWillMount() {
    // Get the params id
    const beerId = this.props.match.params.id
    // Pass id to fetch beer details in API
    this.props.fetchBeerDetails(beerId)
  }
  render() {
    const beer = this.props.beerDetails[0] || ''
    const isLoading = this.props.isLoading
    return (
      <Container>
        {isLoading ? (<Loading>Carregando...</Loading>) : (<Beer>
          <Image>
            <img src={beer.image_url} alt="" width="120" />
          </Image>
          <Info>
            <Name>{beer.name}</Name>
            <Tag>{beer.tagline}</Tag>
            <Description>{beer.description}</Description>
          </Info>
        </Beer>)}
      </Container>
    );
  }
}

const mapStateToProps = ({ beers }) => ({
  beerDetails: beers.beerDetails,
  isLoading: beers.isLoading,
  errorMessage: beers.errorMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeerDetails
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDetails);