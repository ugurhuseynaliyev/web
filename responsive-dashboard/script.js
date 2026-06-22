const sales = [100, 200, 150, 300, 250];
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

let total = 0;

for (let i = 0; i < sales.length; i++) {
  total += sales[i];
}

document.getElementById("total").innerText = total + " $";

const max = Math.max(...sales);

for (let i = 0; i < sales.length; i++) {
  let height = (sales[i] / max) * 180;
  let x = i * 80 + 40;
  let y = 220 - height;

  ctx.fillStyle = "steelblue";
  ctx.fillRect(x, y, 50, height);

  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.fillText(sales[i], x + 8, y - 10);

  ctx.fillText(months[i], x + 10, 240);
}
