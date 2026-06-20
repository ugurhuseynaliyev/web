async function search() {
  const query = document.querySelector("input").value;
  const url = `https://imdb.iamidiotareyoutoo.com/search?q=${query}`;

  const res = await fetch(url);
  const data = await res.json();

  renderMovies(data.description);
}

function renderMovies(movies) {
  const container = document.querySelector(".result");
  const yearFilter = document.querySelector(".year").value;
  container.innerHTML = "";

  movies
    .filter((movie) => {
      if (!yearFilter) return true;
      return movie["#YEAR"] == yearFilter;
    })
    .forEach((movie) => {
      container.innerHTML += `
        <div class="card">
            <img src="${movie["#IMG_POSTER"]} alt="poster"/>

            <h3>${movie["#TITLE"]}</h3>

            <p>Year: ${movie["#YEAR"]}</p>
        </div>
    `;
    });
}
