import React from 'react';
import { Link } from 'react-router-dom';

import { MDBDataTableV5, MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact';

function CarDetails(props) {
  //   const car = props.location.aboutProps.car;
  //   console.log(car);
  const car = {
    id: 1,
    companyName: 'Chevrolet',
    model: 'Tavera',
    seatingCapacity: 9,
    dailyRentalRate: 1200,
    color: 'white',
    year: 2013,
    bookings: [],
  };

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Phone Number',
        field: 'phoneNumber',
        width: 270,
      },
      {
        label: 'Issue Date',
        field: 'issueDate',
        width: 200,
      },
      {
        label: 'Return Datee',
        field: 'returnDate',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        phoneNumber: '9283749214',
        issueDate: '25 November 2019',
        returnDate: '29 November 2019',
      },
    ],
  });

  return (
    <MDBContainer className="container">
      <div className="jumbotron my-5 mx-5" height="100px">
        <MDBRow>
          <MDBCol>
            <img
              src="https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x360/quality/70/https://s.aolcdn.com/commerce/autodata/images/USD00AUC171A021001.jpg"
              className="rounded float-left"
              alt="aligment"
              style={{ width: '300px' }}
            />
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">{car.model}</h3>
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">${car.dailyRentalRate}</h3>
          </MDBCol>

          <MDBCol className="col-sm">
            <h3 className="h3-responsive">{car.year}</h3>
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
          </MDBRow>
        </MDBRow>
      </div>

      {/* Car Details */}
      <div class="card">
        <div class="card-header">Car Details</div>
        <div class="card-body">
          <a href="#!" class="btn btn-primary">
            Not available!
          </a>
          <h5 class="card-title">Vehicle Number: 312234</h5>
          <h5 class="card-title">Engine Type: Petrol</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content. With supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>

      {/* Booking Details */}
      <MDBDataTableV5 data={datatable} />
    </MDBContainer>
  );
}

export default CarDetails;
