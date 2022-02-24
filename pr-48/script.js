const imageContainer = document.querySelector(".image-container");

for (let i = 0; i < 31; i++) {
  const id = i.toString().padStart(2, "0");
  const url = `https://picsum.photos/2${id}`;
  const image = document.createElement("img");
  image.src = url;
  imageContainer.appendChild(image);
}
