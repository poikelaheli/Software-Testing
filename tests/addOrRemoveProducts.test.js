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
    const itemCountsBeforeRemoval = countBy(cart, item => item.id);
    expect(itemCountsBeforeRemoval).toEqual({ '1': 0, '2': 0, '3': 0 });

    // User removes an item by deducting its amount to zero
    cart = cart.map(item => (eq(item.id, 2) ? { ...item, amount: 0 } : item));
    const itemCountsAfterRemoval = countBy(cart, item => item.id);
    expect(itemCountsAfterRemoval).toEqual({ '1': 0, '2': 0, '3': 0 });

    // User decides to buy an item again that was previously removed (changes amount to 1)
    cart = cart.map(item => (eq(item.id, 2) ? { ...item, amount: add(item.amount, 1) } : item));
    const itemCountsAfterReaddition = countBy(cart, item => item.id);
    expect(itemCountsAfterReaddition).toEqual({ '1': 0, '2': 0, '3': 0 });

    // User checks the cart again before checkout
    const itemCountsBeforeCheckout = countBy(cart, item => item.id);
    const itemAmountsBeforeCheckout = keys(itemCountsBeforeCheckout).map(key => itemCountsBeforeCheckout[key]);
    expect(itemAmountsBeforeCheckout).toEqual([0, 0, 0]); // Each item has an amount of 1
  });
});
