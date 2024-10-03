const selectedProduct = document.querySelector('#selected-product');

function displayProductDetails() {
    let productHtml = '';

    try {
        let productData = JSON.parse(localStorage.getItem('Product Data'));
        // console.log(productData);

        getProductId = JSON.parse(localStorage.getItem('Detail'));

        // console.log('Fetched Product data', productData);
        // console.log('Product id', getProductId);

        const selectedProductData = productData.find((item) => {
            return item.id == getProductId;
        })

        console.log(selectedProductData);

        if (selectedProductData) {
            productHtml += `<div id="img-container" class="col-12 col-md-5">
                    <img src="${selectedProductData.image}" alt="image" class="img-fluid rounded">
                </div>
                <div class="col-12 col-md-7" id="details-container">
                    <h6 class="mt-4 text-capitalize">${selectedProductData.category}</h6>
                    <h2 class="mt-3 fs-1 fw-bold">${selectedProductData.title}</h2>
                    <span class="mt-4 fs-4">$${selectedProductData.price}</span>
                    <p class="mt-5 fs-5 text-secondary text-capitalize">${selectedProductData.description}</p>
                    <button type="button" class="btn btn-danger mt-4 w-25 fw-bold">Buy Now</button>
                </div> `
            selectedProduct.innerHTML = productHtml;

        } else {
            selectedProduct.innerHTML = `<h3 class="text-center">No Product Found</h3>`;
        }

    } catch (error) {
        console.log(error);
        selectedProduct.innerHTML = `<h3 class="text-center">${error}</h3>`;
    }
}

displayProductDetails();

/********* Cart Count ***********/

let getValue = JSON.parse(localStorage.getItem('Cart Number'));

cartCount();

function cartCount() {
    let count = document.querySelector('#count');
    count.innerHTML = getValue.length;

}
