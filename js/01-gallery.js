import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function galleryCreate() {
  let galleryHtml = "";
  for (let i = 0; i < galleryItems.length; i++) {
    galleryHtml += `<li class="gallery__item"><a class="gallery__link" href="${galleryItems[i].original}"><img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}"></a></li>`;
  }
  galleryList.innerHTML = galleryHtml;
}

galleryCreate();

const imageLinks = document.querySelectorAll(".gallery__link");
imageLinks.forEach(function (link, index) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
      <img src="${galleryItems[index].original}" width="800" height="600">
    `);
    instance.show();
  });
});
