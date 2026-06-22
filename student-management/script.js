let students_container = document.querySelector(".students-container");
let st_name = document.querySelector(".st-name");
let st_group = document.querySelector(".st-group");
let st_faculty = document.querySelector(".st-faculty");
let st_specialization = document.querySelector(".st-specialization");
let searchInput = document.querySelector(".search");

let students = [];

students_container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("edit")) return;

  const studentDiv = e.target.closest(".student");

  const nameEl = studentDiv.querySelector(".student-name");
  const groupEl = studentDiv.querySelector(".student-group");
  const facultyEl = studentDiv.querySelector(".student-faculty");
  const specEl = studentDiv.querySelector(".student-specialization");

  if (e.target.innerText === "Edit") {
    nameEl.innerHTML = `<input class="edit-name" value="${nameEl.innerText}">`;
    groupEl.innerHTML = `<input class="edit-group" value="${groupEl.innerText}">`;
    facultyEl.innerHTML = `<input class="edit-faculty" value="${facultyEl.innerText}">`;
    specEl.innerHTML = `<input class="edit-spec" value="${specEl.innerText}">`;

    e.target.innerText = "Save";
  } else {
    const id = Number(studentDiv.dataset.id);

    const student = students.find((s) => s.id === id);

    student.name = studentDiv.querySelector(".edit-name").value;
    student.group = studentDiv.querySelector(".edit-group").value;
    student.faculty = studentDiv.querySelector(".edit-faculty").value;
    student.specialization = studentDiv.querySelector(".edit-spec").value;

    e.target.innerText = "Edit";

    renderStudents(searchInput.value.toLowerCase());
  }
});

function addStudent() {
  students.push({
    id: Date.now(),
    name: st_name.value,
    group: st_group.value,
    faculty: st_faculty.value,
    specialization: st_specialization.value,
  });

  st_name.value = "";
  st_group.value = "";
  st_faculty.value = "";
  st_specialization.value = "";

  renderStudents();
}

function deleteStudent(id) {
  students = students.filter((student) => student.id != id);
  renderStudents();
}

searchInput.addEventListener("input", function () {
  renderStudents(this.value.toLowerCase());
});

function renderStudents(searchValue = "") {
  students_container.innerHTML = "";

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchValue);
  });

  filteredStudents.forEach((student) => {
    const studentHtml = `
     <div class="student" data-id="${student.id}">
          <p class="student-name">${student.name}</p>
          <p class="student-group">${student.group}</p>
          <p class="student-faculty">${student.faculty}</p>
          <p class="student-specialization">${student.specialization}</p>
          <button class="edit">Edit</button>
          <button class="delete" onclick="deleteStudent(${student.id})">Delete</button>
    </div>
  `;

    students_container.innerHTML = studentHtml + students_container.innerHTML;
  });
}
