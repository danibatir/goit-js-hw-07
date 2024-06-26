import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function galleryCreate() {
  let galleryHtml = "";
  for (let i = 0; i < galleryItems.length; i++) {
    galleryHtml += `<li class="gallery__item"><a class="gallery__link" href="${galleryItems[i].original}"><img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}"></a></li>`;
  }
  galleryList.innerHTML = galleryHtml;
}

galleryCreate();

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "text",
  captionPosition: "bottom",
  captionDelay: 250,
});
