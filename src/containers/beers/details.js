import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBeerDetails,
  resetState
} from '../../modules/beers';

import Toolbar from '../../components/toolbar';

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
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Name = styled.h2`
  font-size: 2.2em;
  font-family: 'Concert One', cursive;
  margin: 5px 0;
  color: #E15D29;
`;

const Tag = styled.span`
  font-size: 1em;
  color: #666;
`;

const Description = styled.p`
  font-size: 1em;
`;

const Image = styled.figure`
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 520px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Alert = styled.div`
  background: rgba(255, 4, 4, 0.68);
  color: #fff;
  padding: 15px 25px;
`;

const Loading = styled.div`
  font-size: 1.4em;
  margin: 15px 25px;
`;

// Create a class to BeerDetails Component
class BeerDetails extends Component {
  componentWillMount() {
    // Get the params id
    const beerId = this.props.match.params.id
    // Pass id to fetch beer details in API
    this.props.fetchBeerDetails(beerId)
  }
  componentWillUnmount() {
    // Reset state to component unmount
    this.props.resetState()
  }
  render() {
    const beer = this.props.beerDetails[0] || ''
    const isLoading = this.props.isLoading
    const isError = this.props.isError
    return (
      <Container>
        <Toolbar 
          title="Beer Details" 
          history={this.props.history} 
          isDetails={true} 
        />
        {isError ? <Alert>{this.props.errorMessage}</Alert> : ''}
        {isLoading ? (<Loading>Loading...</Loading>) : (<Beer>
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
  isError: beers.isError,
  errorMessage: beers.errorMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeerDetails,
  resetState
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDetails);