import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
console.log(galleryMarkup);
galleryRef.insertAdjacentHTML('beforebegin', galleryMarkup);

const onGalleryClick = evt => {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const largeImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImg}" width="800" height="600">`);
  instance.show();

  galleryRef.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
    {
      once: true;
    }
  });
};

galleryRef.addEventListener('click', onGalleryClick);
