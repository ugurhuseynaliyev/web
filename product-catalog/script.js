const productsEl = document.getElementById("products");
const searchEl = document.getElementById("search");
const sortEl = document.getElementById("sort");
const filterEl = document.getElementById("filter");

let products = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRrKReotif6_Vilg0GCyBxbOa38vYpWMrQA&s",
    name: "iPhone 14",
    category: "phone",
    price: 1200,
  },
  {
    id: 2,
    url: "https://m.media-amazon.com/images/I/51jZNC1g--L.jpg",
    name: "Samsung S23",
    category: "phone",
    price: 1000,
  },
  {
    id: 3,
    url: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2024_M4_Pro/IMG_7593.JPG",
    name: "MacBook Pro",
    category: "laptop",
    price: 2500,
  },
  {
    id: 4,
    url: "https://sm.pcmag.com/t/pcmag_me/review/d/dell-xps-1/dell-xps-13-9350-core-ultra-2_uvww.1200.jpg",
    name: "Dell XPS",
    category: "laptop",
    price: 1800,
  },
];

function renderProducts(data) {
  productsEl.innerHTML = "";

  data.forEach((p) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${p.url}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <b>$${p.price}</b>
    `;
    productsEl.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];

  const search = searchEl.value.toLowerCase();
  if (search) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(search));
  }

  const category = filterEl.value;
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  const sort = sortEl.value;

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchEl.addEventListener("input", applyFilters);
sortEl.addEventListener("change", applyFilters);
filterEl.addEventListener("change", applyFilters);

applyFilters();
