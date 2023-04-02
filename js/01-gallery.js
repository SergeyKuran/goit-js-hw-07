import { galleryItems } from './gallery-items.js';

// Change code below this line
// Пошук по селектору
const galleryEl = document.querySelector('.gallery');

// Створення функції, яка створить розмітку
function createCard(card) {
    return card.map(({ preview, original ,description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
            `
            }).join('');
};
 
// Розмітку добавлено
galleryEl.insertAdjacentHTML('beforeend', createCard(galleryItems));

// Пошук батька першого по класу
const findItem = document.querySelector('.gallery');
console.log(findItem);

// Добавляємо слухача подій
findItem.addEventListener('click', onModalAddOriginalImg);

function onModalAddOriginalImg(evt) {
    // Блокуємо перекидання на наступну сторінку при кліку
        evt.preventDefault()

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const  onEscKey = (evt) => {
        if(evt.code === "Escape"){
         instance.close()
        }
    }

        const instance = basicLightbox.create(`
        <img src='${evt.target.dataset.source}'>
    `,

    {
        onShow: () => {
            window.addEventListener('keydown', onEscKey)},

        onClose: () => {
            window.removeEventListener('keydown', onEscKey)
        }
    });
    instance.show();
   
}




