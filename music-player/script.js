const audio = document.getElementById("audio");
const track = document.getElementById("track");

const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];

let index = 0;
let playing = false;

audio.src = songs[index];

function loadSong() {
  audio.src = songs[index];
  track.textContent = "Current Track: " + songs[index];

  if (playing) {
    audio.play();
  }
}

document.getElementById("play").onclick = () => {
  if (!playing) {
    audio.play();
    playing = true;
    document.getElementById("play").textContent = "⏸ Pause";
  } else {
    audio.pause();
    playing = false;
    document.getElementById("play").textContent = "▶ Play";
  }
};

document.getElementById("next").onclick = () => {
  index++;

  if (index >= songs.length) {
    index = 0;
  }

  loadSong();
};

document.getElementById("prev").onclick = () => {
  index--;

  if (index < 0) {
    index = songs.length - 1;
  }

  loadSong();
};
