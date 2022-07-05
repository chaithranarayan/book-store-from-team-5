let subtotal = 0;

const calculateTax = subtotal => {
  const tax = subtotal * 0.05;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = title => {
  let imgLink;
  switch (title) {
    case 'clean code':
      imgLink = 'book3.jpeg';
      break;
    case 'beginning programming':
      imgLink = 'img//book4.jpeg';
      break;
    case 'world history':
      imgLink = 'img//book8.jpeg';
      break;
    case 'social studies':
      imgLink = 'img//book9.jpeg';
      break;
    case 'types and programming languages':
      imgLink = 'img//book7.jpeg';
      break;
    case 'all the light':
      imgLink = 'img//book11.jpeg';
      break;
    case 'good health':
      imgLink = 'img//book12.jpeg';
      break;
    case 'an orphans war':
      imgLink = 'img//book13.jpeg';
      break;
    case 'get programming':
      imgLink = 'img//book5.jpeg';
      break;
    default:
      imgLink = 'img//book5.jpeg';}

  return imgLink;
};

$('.add-button').on('click', function () {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">$${price}</p>
      </div>
    </li>
  `;
  $('.cart-items').append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">subtotal:</span>
      <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">delivery charges:</span>
      <span class="g-price tax">$${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">total:</span>
      <span class="g-price total">$${total}</span>
    </p>
  `);
});