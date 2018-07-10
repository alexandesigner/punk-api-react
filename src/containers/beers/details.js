import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBeerDetails,
  resetState
} from '../../modules/beers';

import Toolbar from '../../components/toolbar';
import Beer from '../../components/beer';

// Styles
const Container = styled.div`
  height: 100%;
  margin: 0;
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
        {isLoading ? (<Loading>Loading...</Loading>) : (
          <Beer 
            name={beer.name} 
            image_url={beer.image_url} 
            tagline={beer.tagline}
            description={beer.description}
          />
        )}
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