const api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

let previousData = [];

async function fetchCrypto() {
  const res = await fetch(api);
  const data = await res.json();

  const tbody = document.getElementById("crypto");
  tbody.innerHTML = "";

  data.forEach((coin, i) => {
    let prev = previousData[i];

    let changeClass = "";
    if (coin.price_change_percentage_24h > 0) {
      changeClass = "up";
    } else {
      changeClass = "down";
    }

    tbody.innerHTML += `
      <tr>
        <td>${coin.name}</td>
        <td>$${coin.current_price}</td>
        <td class="${changeClass}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
      </tr>
    `;
  });

  previousData = data;
}

fetchCrypto();

setInterval(fetchCrypto, 60000);
