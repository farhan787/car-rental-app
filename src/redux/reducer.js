import cars from '../data/cars';

const carReducer = function (state = cars, action) {
  console.log(action.type);
  switch (action.type) {
    case 'BOOK_CAR':
      console.log('BOOK_CAR reducer');
    default:
      return state;
  }
};

export default carReducer;
