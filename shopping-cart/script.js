let cart = document.querySelector(".cart");

let cartItems = [];

function addToCart(btn) {
  let productEl = btn.closest(".product");

  const title = productEl.querySelector(".p-title").innerText;
  const price = Number(productEl.querySelector(".p-price").innerText);
  const quantity = Number(productEl.querySelector(".counter p").innerText);

  let existing = cartItems.find((item) => item.title === title);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({
      title,
      price,
      quantity,
    });
  }

  renderCart();
}

function renderCart() {
  cart.innerHTML = "";

  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
    const cartHtml = `
       <div class="cart-item">
        <div class="left">
          <p class="item-name">${item.title}</p>
          <p class="item-price">${item.price * item.quantity}</p>
        </div>
        <div class="qty">
          <button onclick="decreaseQty('${item.title}')">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQty('${item.title}')">+</button>
        </div>
        <button class="delete" onclick="removeItem('${item.title}')">Delete</button>
      </div>
    `;

    cart.innerHTML += cartHtml;
  });

  cart.innerHTML += `
    <div class="cart-total">
      <h3>Total: ${total}</h3>
    </div>
  `;
}

function increaseQty(title) {
  const item = cartItems.find((i) => i.title === title);
  item.quantity++;
  renderCart();
}

function decreaseQty(title) {
  const item = cartItems.find((i) => i.title === title);
  item.quantity--;

  if (item.quantity <= 0) {
    cartItems = cartItems.filter((i) => i.title !== title);
  }

  renderCart();
}

function removeItem(title) {
  cartItems = cartItems.filter((i) => i.title !== title);
  renderCart();
}

function inc(btn) {
  const counter = btn.closest(".counter").querySelector("p");
  counter.innerText = Number(counter.innerText) + 1;
}

function dec(btn) {
  const counter = btn.closest(".counter").querySelector("p");
  let value = Number(counter.innerText);

  if (value > 1) {
    counter.innerText = value - 1;
  }
}
