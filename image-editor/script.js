const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = document.getElementById("width");
const rotate = document.getElementById("rotate");
const grayBtn = document.getElementById("grayBtn");
const resetBtn = document.getElementById("resetBtn");

let img = new Image();
let grayscale = false;

upload.onchange = (e) => {
  const reader = new FileReader();
  reader.onload = (ev) => (img.src = ev.target.result);
  reader.readAsDataURL(e.target.files[0]);
};

img.onload = draw;

function draw() {
  const w = +width.value;
  const r = +rotate.value;

  canvas.width = w;
  canvas.height = w * (img.height / img.width);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((r * Math.PI) / 180);
  ctx.filter = grayscale ? "grayscale(100%)" : "none";

  ctx.drawImage(
    img,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height,
  );
  ctx.restore();
}

width.oninput = draw;
rotate.oninput = draw;

grayBtn.onclick = () => {
  grayscale = !grayscale;
  draw();
};

resetBtn.onclick = () => {
  width.value = 400;
  rotate.value = 0;
  grayscale = false;
  draw();
};
