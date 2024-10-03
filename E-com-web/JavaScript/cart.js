/********* Cart Count ***********/

let getValue = JSON.parse(localStorage.getItem('Cart Number'));

cartCount();

function cartCount() {
    let count = document.querySelector('#count');
    count.innerHTML = getValue.length;
}

/********* Display Cart Products **************/

let cartContainer = document.querySelector('#cart-container');

displayCartProduct();

function displayCartProduct() {

    cartContainer.innerHTML= '';

    let cartHtml = '';

    let cartData = JSON.parse(localStorage.getItem('Product Data'));
    // console.log(cartData);

    let totalPrice = 0;

    const selectedCartProduct = cartData.filter((item) => {
        return getValue.includes(item.id);
    })
    

    console.log(selectedCartProduct);

    selectedCartProduct.forEach((item, index) => {

        totalPrice += item.price;

        cartHtml += `
                    <tr>
                        <th scope="row" id="delete" onclick="removeCartItem(${index});"><i class="bi bi-trash"></i></th>
                        <td>
                            <div id="cart-product">
                                <img src="${item.image}" alt="img" class="img-fluid rounded">
                                <p class="text-wrap text-break">${item.title}</p>
                            </div>
                        </td>
                        <td>$${item.price}</td>                     
                    </tr>`

        cartContainer.innerHTML = cartHtml;
    })

    calculateTotalPrice(totalPrice);
}


/************* Removing  Cart Item ***************/

function removeCartItem(delIndex) {
    // console.log(delIndex);

    let cartNumbers = JSON.parse(localStorage.getItem('Cart Number')) || [];
    cartNumbers.splice(delIndex, 1);

    localStorage.setItem('Cart Number', JSON.stringify(cartNumbers));

    getValue = cartNumbers;

    displayCartProduct();
    cartCount();

}

/********** Calculate Price *********/

function calculateTotalPrice(totalPrice) {
    const taxPercentage = 0.10;
    const govTax = totalPrice * taxPercentage;
    const finalAmount = totalPrice + govTax;

    document.querySelector('#amount').innerHTML = `$${totalPrice.toFixed(2)}`;
    document.querySelector('#tax').innerHTML = `$${govTax.toFixed(2)}`;
    document.querySelector('#total-amount').innerHTML = `$${finalAmount.toFixed(2)}`;
}