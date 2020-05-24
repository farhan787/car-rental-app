import React from 'react';
import Car from './Car';

function CarsWall(props) {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      {props.cars.map((car,index) => (
        <Car car={car} key={index} />
      ))}
    </div>
  );
}

export default CarsWall;
