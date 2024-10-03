
/********** Products *************/

const cardHtml = document.querySelector('#card');
const filterSelect = document.querySelector('#filter');

showProductData();

async function showProductData(category = '') {
    const api = `https://fakestoreapi.com/products`;

    let productHtml = '';
    cardHtml.innerHTML = `<h3 class="text-center fs-1 fw-bold">Loading...</h3>`

    try {
        let apiData = await fetch(api);
        let productData = await apiData.json();

        // console.log(productData);

        if (category) {
            productData = productData.filter(item => item.category == category);
            localStorage.setItem('Product Data', JSON.stringify(productData));
        } else {
            localStorage.setItem('Product Data', JSON.stringify(productData));
            // console.log(productData);
        }

        productData.forEach((item, index) => {
            productHtml += `
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div class="card p-0">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <div class="card-body pt-4 ps-4">
                                <h5 class="card-title mb-4 ">${item.title}</h5>
                                <span class="fs-6 bg-dark rounded py-1 px-2 text-light">${item.rating.rate}⭐</span>
                                <span class="text-center ms-2 fw-bold text-secondary">(${item.rating.count})</span>
                                <p class="fs-3 mt-3"><strong>$${item.price}</strong></p>
                                <a href="/Html/details.html" class="btn btn-secondary" onclick="productDetails(${item.id})">Details</a>
                                <button type="button" id="add-cart-btn" class="btn" onclick="addCart(${item.id})">Add to cart</button>
                            </div>
                        </div>
                </div>`
        });
        cardHtml.innerHTML = productHtml;

    } catch (error) {
        cardHtml.innerHTML = `<h2 class="text-center fs-1 fw-bold">Failed to load</h2>`
    }
}

filterSelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    showProductData(selectedCategory);
})

/********** Add to cart **********/


let getValue = JSON.parse(localStorage.getItem('Cart Number')) || [];

function addCart(itemIndex) {
    let value = itemIndex;
    
    getValue.push(value);
    
    localStorage.setItem('Cart Number', JSON.stringify(getValue));

    cartCount();
}

cartCount();

function cartCount() {
    let count = document.querySelector('#count');
    count.innerHTML = getValue.length;

    
}


/********** Product Details ************/

function productDetails(proId) {
    localStorage.setItem('Detail', JSON.stringify(proId));
}