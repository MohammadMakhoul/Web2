const books = 
[
    { id: 1, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 30, img: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", price: 25, img: "https://m.media-amazon.com/images/I/41-sN-mzwKL.jpg" },
    { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 20, img: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg" }
];

const cart = [];

function displayBooks() 
{
    const bookList = document.getElementById("bookList");
    books.forEach(book => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="${book.title}" style="height: 300px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text text-muted">by ${book.author}</p>
            <p class="card-text text-success fw-bold">$${book.price}</p>
            <button class="btn btn-primary mt-auto" onclick="addToCart(${book.id})">Add to Cart</button>
            </div>
        </div>`;
    bookList.appendChild(col);
});
}

function addToCart(bookId) 
{
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    updateCart();
}

function updateCart() 
{
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach((book, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center bg-dark text-light";
    item.innerHTML = `
        ${book.title} <span class="badge bg-primary">$${book.price}</span>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="bi bi-trash"></i></button>
    `;
    cartList.appendChild(item);
});
}

function removeFromCart(index) 
{
    cart.splice(index, 1);
    updateCart();
}

displayBooks();
