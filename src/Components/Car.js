import React from 'react';
import { Link } from 'react-router-dom';

import { MDBBtn, MDBRow, MDBCol } from 'mdbreact';

function Car(props) {
  const car = props.car;
  return (
    <div className="container">
      <div className="jumbotron my-5 mx-5" height="100px">
        <MDBRow>
          <MDBCol>
            <img
              src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x360/quality/70/https://s.aolcdn.com/commerce/autodata/images/USD00AUC171A021001.jpg"
              className="rounded float-left"
              alt="aligment"
              style={{ width: '200px' }}
            />
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">{car.model}</h3>
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">${car.dailyRentalRate}</h3>
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">{car.seatingCapacity}</h3>
          </MDBCol>

          <MDBRow>
            <MDBCol className="col-sm">
              <Link
                to={{
                  pathname: '/BookCar',
                  aboutProps: {
                    car: car,
                  },
                }}
              >
                <MDBBtn color="primary" className="float-left">
                  Book
                </MDBBtn>
              </Link>
            </MDBCol>

            <MDBCol className="col-sm">
              <Link
                to={{
                  pathname: '/CarDetails',
                  aboutProps: {
                    car: car,
                  },
                }}
              >
                <MDBBtn color="default" className="float-right">
                  Details
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBRow>
      </div>
    </div>
  );
}

export default Car;
