let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

function displayPasswords(data) {
  const list = document.getElementById("passwordList");

  list.innerHTML = "";

  data.forEach((item) => {
    list.innerHTML += `
      <div class="card">
        <h3>${item.website}</h3>
        <p>Username: ${item.username}</p>
        <p>Password: ${item.password}</p>
      </div>
    `;
  });
}

document.getElementById("saveBtn").addEventListener("click", () => {
  const website = document.getElementById("website").value;

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  if (website === "" || username === "" || password === "") {
    alert("Fill all cells!");
    return;
  }

  const newPassword = {
    website,
    username,
    password,
  };

  passwords.push(newPassword);

  localStorage.setItem("passwords", JSON.stringify(passwords));

  displayPasswords(passwords);

  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("search").addEventListener("input", function () {
  const text = this.value.toLowerCase();

  const filtered = passwords.filter((item) =>
    item.website.toLowerCase().includes(text),
  );

  displayPasswords(filtered);
});

displayPasswords(passwords);
