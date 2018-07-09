import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchBeerDetails
} from '../../modules/beers';

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
      <div>
        {isLoading ? (<div>Carregando...</div>) : (<div key={beer.id}>
          <div>
            <strong>{beer.name}</strong>
            <span>{beer.tagline}</span>
          </div>
        </div>)}
      </div>
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