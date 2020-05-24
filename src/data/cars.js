const cars = [
  {
    id: 0,
    companyName: 'Totota',
    model: 'Fortuner',
    seatingCapacity: 9,
    dailyRentalRate: 1500,
    color: 'black',
    year: 2017,
    imageLink: "data:image/jpeg;base64,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",
    bookings: [],
  },
  {
    id: 1,
    companyName: 'Chevrolet',
    model: 'Tavera',
    seatingCapacity: 9,
    dailyRentalRate: 1200,
    color: 'white',
    year: 2013,
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2UwcOeKBlH41Hv2EFb7l24jCDmjUwvKdfstxIJ2jXZsQCzny&usqp=CAU",
    bookings: [],
  },
  {
    id: 2,
    companyName: 'Maruti Suzuki',
    model: 'Swift Dzire',
    seatingCapacity: 5,
    dailyRentalRate: 800,
    color: 'red',
    year: 2018,
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoFF1X9lRSRylKYSWs5XVrYRnv5nwIlBd4ICJ3FQ4laKqx0TXc&usqp=CAU",
    bookings: [],
  },
];

export default cars;
