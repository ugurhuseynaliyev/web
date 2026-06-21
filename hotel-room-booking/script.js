let rooms = [
  { id: 1, name: "Room 101", price: 50, occupied: false },
  { id: 2, name: "Room 102", price: 70, occupied: true },
  { id: 3, name: "Room 103", price: 90, occupied: false },
  { id: 4, name: "Room 104", price: 120, occupied: false },
];

const roomsContainer = document.getElementById("rooms");

function renderRooms() {
  roomsContainer.innerHTML = "";

  rooms.forEach((room) => {
    const div = document.createElement("div");

    div.classList.add("room");

    if (room.occupied) {
      div.classList.add("occupied");
    }

    div.innerHTML = `
        <h3>${room.name}</h3>
        <p>Price:$${room.price}</p>
        <button onclick="selectRoom(${room.id})" ${room.occupied ? "disabled" : ""}>
            ${room.occupied ? "Occupied" : "Book"}
        </button>
    `;
    roomsContainer.appendChild(div);
  });
}

let selectedRoom = null;

function selectRoom(id) {
  const room = rooms.find((r) => r.id === id);

  if (room.occupied) return;

  selectedRoom = room;

  renderBookingInfo();
}

function renderBookingInfo() {
  const box = document.getElementById("bookingInfo");

  if (!selectedRoom) {
    box.innerHTML = "<p>No room selected</p>";
    return;
  }

  box.innerHTML = `
    <div class="booking-card">
      <h2>Booking Details</h2>
      <p>Room: ${selectedRoom.name}</p>
      <p>Price: $${selectedRoom.price}</p>

      <button onclick="confirmBooking()">
        Confirm Booking
      </button>
    </div>
  `;
}

function confirmBooking() {
  if (!selectedRoom) return;

  rooms = rooms.map((room) => {
    if (room.id === selectedRoom.id) {
      return { ...room, occupied: true };
    }
    return room;
  });

  selectedRoom = null;

  renderRooms();
  renderBookingInfo();
}

renderRooms();
renderBookingInfo();
