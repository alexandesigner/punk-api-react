import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home';
import BeersList from '../beers/list';
import BeerDetails from '../beers/details';

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/cervejas" component={BeersList} />
    <Route exact path="/cervejas/:id" component={BeerDetails} />
  </main>
);

export default App;