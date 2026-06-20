let balanceEl = document.querySelector(".balance span");
let records_container = document.querySelector(".records-container");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let amount = document.querySelector(".amount");

let records = JSON.parse(localStorage.getItem("records")) || [];
let balance = Number(localStorage.getItem("balance")) || 0;

balanceEl.innerText = balance;
renderRecords();

let type = "income";

function setType(x) {
  type = x;
}

function addRecord() {
  const amountVal = Number(amount.value);

  records.push({
    title: title.value,
    desc: desc.value,
    amountVal: amountVal,
    type: type,
  });

  title.value = "";
  desc.value = "";
  amount.value = "";

  if (type === "expense") {
    balance -= amountVal;
  } else {
    balance += amountVal;
  }

  localStorage.setItem("records", JSON.stringify(records));
  localStorage.setItem("balance", balance);

  balanceEl.innerText = balance;

  renderRecords();
}

function renderRecords() {
  records_container.innerHTML = "";

  records.forEach((record) => {
    const recordHtml = `
        <div class="record">
            <h3>${record.title}</h3>
            <p>${record.desc}</p>
            <p>Amount: ${record.amountVal}</p>
            <div class="${record.type}">${record.type}</div>
        </div>
    `;

    records_container.innerHTML = recordHtml + records_container.innerHTML;
  });
}
