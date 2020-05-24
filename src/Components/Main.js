import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Title from './Title';
import CarsWall from './CarsWall';
import CarDetails from './CarDetails';
import BookCar from './BookCar';

import cars from '../data/cars';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link exact to="/">
          <Title title={'RENTVROOM'} />
        </Link>

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <CarsWall cars={cars} />
            </div>
          )}
        />

        <Route
          path="/CarDetails"
          render={({ history }) => (
            <CarDetails {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/BookCar"
          render={({ history }) => (
            <BookCar {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
