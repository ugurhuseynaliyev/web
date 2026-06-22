const seatPrice = 50;

const seatsContainer = document.getElementById("seats");
const totalText = document.getElementById("total");

let selectedSeats = [];

const leftCol = document.createElement("div");
leftCol.classList.add("column");

const rightCol = document.createElement("div");
rightCol.classList.add("column");

for (let i = 0; i < 30; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.innerText = i + 1;

  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");

    if (selectedSeats.includes(i)) {
      selectedSeats = selectedSeats.filter((s) => s !== i);
    } else {
      selectedSeats.push(i);
    }

    updatePrice();
  });

  if (i < 15) {
    leftCol.appendChild(seat);
  } else {
    rightCol.appendChild(seat);
  }
}

seatsContainer.appendChild(leftCol);
seatsContainer.appendChild(rightCol);

function updatePrice() {
  totalText.innerText = selectedSeats.length * seatPrice;
}
