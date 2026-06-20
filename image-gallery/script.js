const images = [
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1020/800/600",
  "https://picsum.photos/id/1024/800/600",
  "https://picsum.photos/id/1035/800/600",
  "https://picsum.photos/id/1039/800/600",
  "https://picsum.photos/id/1043/800/600",
  "https://picsum.photos/id/1050/800/600",
  "https://picsum.photos/id/1057/800/600",
  "https://picsum.photos/id/1060/800/600",
  "https://picsum.photos/id/1069/800/600",
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1020/800/600",
  "https://picsum.photos/id/1024/800/600",
  "https://picsum.photos/id/1035/800/600",
  "https://picsum.photos/id/1039/800/600",
  "https://picsum.photos/id/1043/800/600",
  "https://picsum.photos/id/1050/800/600",
  "https://picsum.photos/id/1057/800/600",
  "https://picsum.photos/id/1060/800/600",
  "https://picsum.photos/id/1069/800/600",
];

const gallery = document.getElementById("gallery");
const preview = document.getElementById("preview");
const previewImage = document.getElementById("previewImage");

const pageInfo = document.getElementById("pageInfo");

let currentIndex = 0;
let currentPage = 1;

const perPage = 9;

function renderGallery() {
  gallery.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const pageItems = images.slice(start, end);

  pageItems.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;

    img.addEventListener("click", () => {
      currentIndex = start + i;
      openPreview();
    });

    gallery.appendChild(img);
  });

  pageInfo.textContent = `Page ${currentPage} / ${Math.ceil(images.length / perPage)}`;
}

function openPreview() {
  preview.classList.remove("hidden");
  previewImage.src = images[currentIndex];
}

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < Math.ceil(images.length / perPage)) {
    currentPage++;
    renderGallery();
  }
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderGallery();
  }
});

document.getElementById("close").addEventListener("click", () => {
  preview.classList.add("hidden");
});

renderGallery();
