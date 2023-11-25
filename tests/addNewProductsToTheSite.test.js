// Import necessary functions
import castArray from '../src/castArray';
import capitalize from '../src/capitalize';
import ceil from '../src/ceil';
import upperFirst from '../src/upperFirst';
import isEmpty from '../src/isEmpty';

describe('Product Addition Integration Test', () => {

  test('User adds new products to the site', () => {
    // User submits new product info
    let testProduct1 = {
      name: 'Product A',
      price: 2.486,
      description: 'test description of Product A.',
      producer: 'Test Producer',
      category: '',
      content: ''
    };

    let testProduct2 = {
      name: 'Product B',
      price: 1.7,
      description: 'Test description of Product B. category and content are mentioned.',
      producer: '',
      category: 'category 1',
      content: 'Description of the content.'
    };

    let testProduct3 = {
      name: 'Product C',
      price: 0,
      description: '',
      producer: 'Test Producer',
      category: 'category 1',
      content: ''
    };

    // Checking required fields are filled
    expect(isEmpty(testProduct1.name)).toBe(false);
    expect(isEmpty(testProduct1.description)).toBe(false);
    expect(isEmpty(testProduct1.producer)).toBe(false);
    
    expect(isEmpty(testProduct2.name)).toBe(false);
    expect(isEmpty(testProduct2.description)).toBe(false);
    expect(isEmpty(testProduct2.producer)).toBe(true);

    expect(isEmpty(testProduct3.name)).toBe(false);
    expect(isEmpty(testProduct3.description)).toBe(true);
    expect(isEmpty(testProduct3.producer)).toBe(false);

    // Formating description, content and category input
    let description1 = testProduct1.description.split('.');
    let formattedDesc1 = ''
    description1.map(phrase => {
      if (phrase === '') {
        return;
      }
      if (phrase.charAt(0) === ' ') {
        phrase = phrase.substring(1);
      }
      return formattedDesc1 = formattedDesc1 + upperFirst(phrase) + '. ';
    });
    expect(formattedDesc1).toBe('Test description of Product A. ');
    let description2 = testProduct2.description.split('.');
    let formattedDesc2 = ''
    description2.map(phrase => {
      if (phrase === '') {
        return;
      }
      if (phrase.charAt(0) === ' ') {
        phrase = phrase.substring(1);
      }
      return formattedDesc2 = formattedDesc2 + upperFirst(phrase) + '. ';
    });
    expect(formattedDesc2).toBe('Test description of Product B. Category and content are mentioned. ');
    let content1 = testProduct1.content.split('.');
    let formattedCont1 = ''
    content1.map(phrase => {
      if (phrase === '') {
        return;
      }
      if (phrase.charAt(0) === ' ') {
        phrase = phrase.substring(1);
      }
      return formattedCont1 = formattedCont1 + upperFirst(phrase) + '. ';
    });
    expect(formattedCont1).toBe('');
    let content2 = testProduct2.content.split('.');
    let formattedCont2 = ''
    content2.map(phrase => {
      if (phrase === '') {
        return;
      }
      if (phrase.charAt(0) === ' ') {
        phrase = phrase.substring(1);
      }
      return formattedCont2 = formattedCont2 + upperFirst(phrase) + '. ';
    });
    expect(formattedCont2).toBe('Description of the content. ');
    let category1 = capitalize(testProduct1.category);
    expect(category1).toBe('');
    let category2 = capitalize(testProduct2.category);
    expect(category2).toBe('Category 1');

    // Formatting price
    let price1 = ceil(testProduct1.price, 2);
    expect(price1).toBe(2.49);
    let price2 = ceil(testProduct2.price, 2);
    expect(price2).toBe(1.70);
  });
});