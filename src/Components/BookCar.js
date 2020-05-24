import React from 'react';
import Swal from 'sweetalert2';

import { MDBContainer } from 'mdbreact';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

function BookCar(props) {
  const handleBooking = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '<strong>Booking <u>Confirmed</u>:)</strong>',
      icon: 'info',
      html:
        'You have booked <b>Totota Fortuner</b>, from <b>issue-date to return-date</b>',

      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Continue',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  };

  return (
    <MDBContainer>
      <div class="row">
        <div class="col-4">
          <img src={'https://image.com/fadfjad'} alt="any image" />
        </div>

        <div class="col-8">
          <form
            className="needs-validation"
            onSubmit={handleBooking}
            noValidate
          >
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  name="name"
                  type="text"
                  id="materialFormRegisterNameEx"
                  label="Name"
                  required
                >
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  name="lname"
                  type="text"
                  id="materialFormRegisterEmailEx2"
                  label="Phone Number"
                  required
                >
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  type="email"
                  id="materialFormRegisterConfirmEx3"
                  name="email"
                  label="Your Email address"
                >
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">
                <MDBInput
                  type="text"
                  id="materialFormRegisterPasswordEx4"
                  name="rentalDays"
                  label="Rental Days"
                  required
                >
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBBtn color="success" type="submit">
              Confirm Booking
            </MDBBtn>
          </form>
        </div>
      </div>
    </MDBContainer>
  );
}

export default BookCar;
