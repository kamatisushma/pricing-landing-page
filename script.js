// script.js
document.addEventListener('DOMContentLoaded', function () {
    const basicToggle = document.getElementById('basic-toggle');
    const basicPrice = document.getElementById('basic-price');

    const standardToggle = document.getElementById('standard-toggle');
    const standardPrice = document.getElementById('standard-price');

    const premiumToggle = document.getElementById('premium-toggle');
    const premiumPrice = document.getElementById('premium-price');

    basicToggle.addEventListener('click', function () {
        updatePrice(basicToggle, basicPrice, 'INR 664.70');
    });

    standardToggle.addEventListener('click', function () {
        updatePrice(standardToggle, standardPrice, 'INR 997.46');
    });

    premiumToggle.addEventListener('click', function () {
        updatePrice(premiumToggle, premiumPrice, 'INR 1330.23');
    });

    function updatePrice(toggle, priceElement, price) {
        // Add logic for updating price or any other dynamic elements
        alert(`You selected ${toggle.textContent} for ${price}`);
    }
});
