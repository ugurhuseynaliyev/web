let selectedCourses = [];
let totalCredits = 0;

function addCourse(name, credits) {
  if (selectedCourses.includes(name)) {
    alert("This course is already selected!");
    return;
  }

  selectedCourses.push(name);
  totalCredits += credits;

  updateUI();
}

function updateUI() {
  const list = document.getElementById("list");
  const total = document.getElementById("total");

  list.innerHTML = "";

  selectedCourses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = course;
    list.appendChild(li);
  });

  total.textContent = totalCredits;
}
