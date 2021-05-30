const Cart = require('./cart');
const addToCart = jest.fn();

jest.mock('./cart');

beforeEach(() => {
  Cart.mockClear();
});

it('should call class constructor', () => {
  const cartObj = new Cart();
  expect(Cart).toHaveBeenCalledTimes(1);
});
