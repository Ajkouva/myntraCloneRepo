// script.js

// Mock API URL
const apiURL = 'https://api.example.com/products';

// Function to fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch(apiURL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products on the page
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;

        productsContainer.appendChild(productElement);
    });
}

// Initialize the script
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});