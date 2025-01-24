let products = [
    {id: 1, name: 'Curso 1: ', price: 10.99, image:'./img/product1.webp'},
    {id: 2, name: 'Curso 2: ', price: 20.99, image:'./img/product2.webp'},
    {id: 3, name: 'Curso 3: ', price: 30.99, image:'./img/product3.webp'},
    {id: 4, name: 'Curso 4: ', price: 40.99, image:'./img/product4.webp'},
    {id: 5, name: 'Curso 5: ', price: 50.99, image:'./img/product5.webp'},
    {id: 6, name: 'Curso 6: ', price: 60.99, image:'./img/product6.webp'},
    {id: 7, name: 'Curso 7: ', price: 70.99, image:'./img/product7.webp'},
    {id: 8, name: 'Curso 8: ', price: 80.99, image:'./img/product8.webp'},
    {id: 9, name: 'Curso 9: ', price: 90.99, image:'./img/product9.webp'},
];

let cart = [];


function renderProducts(){
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Adicionar ao carrinho</button>

        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);

    });
}

function addToCart(productId){
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
    document.getElementById('alert-add-cart').style.display = "inherit";
    
}

function renderCart(){
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    
    cart.forEach((product) => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>$${product.price}</td>
            <td>$${product.price}</td>

        `;
        cartTable.appendChild(cartRow);

    });
    
    updateTotal();
}

function updateTotal(){
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('next');

document.getElementById('checkout').addEventListener('click', () => {
    if(cart.length === 0){
        alert('Seu carrinho está vazio!');
    }
    else {
        document.getElementById('alert-pay-button').style.display = "inherit";
        cart = [];
        renderCart();
    }
});

renderProducts();