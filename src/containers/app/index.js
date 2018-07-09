import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../home';
import BeersList from '../beers/list';
import BeerDetails from '../beers/details';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/cervejas">Lista</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/cervejas" component={BeersList} />
      <Route exact path="/cervejas/:id" component={BeerDetails} />
    </main>
  </div>
);

export default App;