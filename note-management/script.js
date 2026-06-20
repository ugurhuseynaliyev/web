let notesContainer = document.querySelector("#notes");
let note = document.querySelector(".noteInput");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

function addNote() {
  if (!note.value.trim()) return;

  notes.push({
    id: Date.now(),
    note: note.value,
  });

  note.value = "";
  localStorage.setItem("notes", JSON.stringify(notes));

  renderNotes();
}

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    const noteHtml = `
        <div class="note">
            <p class="noteValue">${note.note}</p>
            <div>
                <button class="edit">Edit</button>
                <button class="delete" onclick="deleteNote(${note.id})">Delete</button>
            </div>
        </div>
    `;
    notesContainer.innerHTML += noteHtml;
  });
}

notesContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit")) return;

  const noteDiv = e.target.closest(".note");

  const noteValue = noteDiv.querySelector(".noteValue");

  if (e.target.innerText === "Edit") {
    noteValue.innerHTML = `<input class="edit-note" value="${noteValue.innerText}">`;
    e.target.innerText = "Save";
  } else {
    noteValue.innerText = noteDiv.querySelector(".edit-note").value;

    const id = Number(
      noteDiv.querySelector(".delete").getAttribute("onclick").match(/\d+/)[0],
    );
    const noteObj = notes.find((n) => n.id === id);

    noteObj.note = noteValue.innerText;

    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();

    e.target.innerText = "Edit";
  }
});

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);

  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
