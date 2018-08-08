/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchBeers
} from '../../modules/beers'

import Toolbar from '../../components/toolbar'

// Styles
const Container = styled.div`
  height: 100%;
  margin: 0;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 25px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  &:before {
    position: absolute;
    right: 25px;
    font-size: 0.9em;
    content: "see details";
    top: 52px;
    color: #666;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    font-family: 'Concert One', cursive;
  }
  &:hover {
    background: #f9f9f9;
    &:before {
      opacity: 1;
    }
  }

  @media (max-width: 520px) {
    &:hover {
      &:before {
        opacity: 0;
      }
    }
  }
`

const Name = styled.h2`
  font-family: 'Concert One', cursive;
  font-size: 1.6em;
  margin: 5px 0;
  color: #2e6aff;
  @media (max-width: 520px) {
    font-size: 1.4em;
  }
`

const Tag = styled.span`
  font-size: 1em;
  color: #666;
`

const Alert = styled.div`
  background: rgba(255, 4, 4, 0.68);
  color: #fff;
  padding: 15px 25px;
`

const Loading = styled.div`
  font-size: 1.4em;
  margin: 15px 25px;
`

// Create a class to BeersList Component
class BeersList extends Component {
  componentDidMount () {
    // Fetch all beers
    this.props.fetchBeers()
  }

  selectedBeer (beer) {
    // Selected beer go to details
    this.props.history.push(`/beers/${beer.id}`)
  }

  render () {
    const isLoading = this.props.isLoading
    const isError = this.props.isError
    return (
      <Container>
        <Toolbar
          title="List of beers"
          isDetails={false}
        />
        {isError ? (
          <Alert>
            {this.props.errorMessage}
          </Alert>
        ) : ''}
        {isLoading ? (
          <Loading>
            Loading...
          </Loading>
        ) : (
          <List>
            {this.props.beersList.map((beer) => {
              const { id, name, tagline } = beer
              return (
                <Item onClick={() => this.selectedBeer(beer)} key={id}>
                  <Name>
                    {name}
                  </Name>
                  <Tag>
                    {tagline}
                  </Tag>
                </Item>
              )
            })}
          </List>
        )}
      </Container>
    )
  }
}

BeersList.propTypes = {
  fetchBeers: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  beersList: PropTypes.array
}

const mapStateToProps = ({ beers }) => ({
  beersList: beers.beersList,
  isLoading: beers.isLoading,
  isError: beers.isError,
  errorMessage: beers.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeers
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersList)
