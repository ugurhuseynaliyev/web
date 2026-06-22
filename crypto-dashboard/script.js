let cryptoData = [
  { name: "Bitcoin", current_price: 65000, change: 1.2 },
  { name: "Ethereum", current_price: 3200, change: -0.8 },
  { name: "Solana", current_price: 140, change: 2.5 },
  { name: "Cardano", current_price: 0.45, change: -1.1 },
];

function renderCrypto() {
  const tbody = document.getElementById("crypto");
  tbody.innerHTML = "";

  cryptoData.forEach((coin) => {
    const changeClass = coin.change > 0 ? "up" : "down";

    tbody.innerHTML += `
      <tr>
        <td>${coin.name}</td>
        <td>$${coin.current_price.toFixed(2)}</td>
        <td class="${changeClass}">
          ${coin.change.toFixed(2)}%
        </td>
      </tr>
    `;
  });
}

function updatePrices() {
  cryptoData = cryptoData.map((coin) => {
    const randomChange = (Math.random() * 4 - 2).toFixed(2);

    const newPrice = coin.current_price * (1 + randomChange / 100);

    return {
      ...coin,
      current_price: newPrice,
      change: Number(randomChange),
    };
  });

  renderCrypto();
}

renderCrypto();
setInterval(updatePrices, 2000);
