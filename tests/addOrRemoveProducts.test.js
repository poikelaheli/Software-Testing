// Import the necessary functions (add, eq, countBy, keys) used in the cart scenario
import add from '../src/add.js';
import eq from '../src/eq.js';
import countBy from '../src/countBy.js';
import keys from '../src/keys.js';

describe('Cart Integration Test', () => {
  let cart = [];

  test('User adds and manipulates items in the cart', () => {
    // User adds items to the cart
    cart.push({ id: 1, name: 'Item A', amount: 1 });
    cart.push({ id: 2, name: 'Item B', amount: 1 });
    cart.push({ id: 3, name: 'Item C', amount: 1 });

    // User checks their cart (cart-page)
    const itemCountsBeforeRemoval = countBy(cart, 'id');
    expect(itemCountsBeforeRemoval).toEqual({ '1': 1, '2': 1, '3': 1 });

    // User removes an item by deducting its amount to zero
    cart = cart.map(item => (eq(item.id, 2) ? { ...item, amount: 0 } : item));
    const itemCountsAfterRemoval = countBy(cart, 'id');
    expect(itemCountsAfterRemoval).toEqual({ '1': 1, '2': 0, '3': 1 });

    // User decides to buy an item again that was previously removed (changes amount to 1)
    cart = cart.map(item => (eq(item.id, 2) ? { ...item, amount: 1 } : item));
    const itemCountsAfterReaddition = countBy(cart, 'id');
    expect(itemCountsAfterReaddition).toEqual({ '1': 1, '2': 1, '3': 1 });

    // User checks the cart again before checkout
    const itemCountsBeforeCheckout = countBy(cart, 'id');
    const itemAmountsBeforeCheckout = keys(itemCountsBeforeCheckout).map(key => itemCountsBeforeCheckout[key]);
    expect(itemAmountsBeforeCheckout).toEqual([1, 1, 1]); // Each item has an amount of 1
  });
});
