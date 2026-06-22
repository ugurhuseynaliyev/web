const products = [
  {
    id: 1,
    name: "iPhone",
    category: "phone",
    price: 2000,
  },
  {
    id: 2,
    name: "Samsung",
    category: "phone",
    price: 1500,
  },
  {
    id: 3,
    name: "MacBook",
    category: "laptop",
    price: 3500,
  },
];

let cart = [];

function showProducts(list) {
  const div = document.getElementById("products");

  div.innerHTML = "";

  list.forEach((product) => {
    div.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>${product.price} ₼</p>
        <button onclick="addToCart(${product.id})">
          Add to cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);

  cart.push(product);

  showCart();
}

function showCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");

  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    cartDiv.innerHTML += `
      <p>${item.name} - ${item.price} $</p>
    `;

    total += item.price;
  });

  totalDiv.innerText = total;
}

document.getElementById("filter").addEventListener("change", function () {
  const value = this.value;

  if (value === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter((p) => p.category === value);

    showProducts(filtered);
  }
});

showProducts(products);
