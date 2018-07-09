import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchBeers
} from '../../modules/beers';

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
    return (
      <div>
        {this.props.beersList.map(beer => {
          const { id, name, tagline } = beer;

          return (
            <div onClick={() => this.selectedBeer(beer)} key={id}>
              <div>
                <strong>{name}</strong>
                <span>{tagline}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ beers }) => ({
  beersList: beers.beersList
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeers
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersList);