const moviesData = [
  {
    title: "Inception",
    year: 2010,
    img: "https://via.placeholder.com/150x220?text=Inception",
  },
  {
    title: "Interstellar",
    year: 2014,
    img: "https://via.placeholder.com/150x220?text=Interstellar",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    img: "https://via.placeholder.com/150x220?text=Dark+Knight",
  },
  {
    title: "The Matrix",
    year: 1999,
    img: "https://via.placeholder.com/150x220?text=Matrix",
  },
];

function search() {
  const query = document.querySelector("#movie-name").value.toLowerCase();
  const yearFilter = document.querySelector(".year").value;

  const filtered = moviesData.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(query);
    const matchesYear = yearFilter ? movie.year == yearFilter : true;

    return matchesTitle && matchesYear;
  });

  renderMovies(filtered);
}

function renderMovies(movies) {
  const container = document.querySelector(".result");
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML = "<p>No movies found</p>";
    return;
  }

  movies.forEach((movie) => {
    container.innerHTML += `
      <div class="card">
        <img src="${movie.img}" alt="poster" />

        <h3>${movie.title}</h3>

        <p>Year: ${movie.year}</p>
      </div>
    `;
  });
}

renderMovies(moviesData);
