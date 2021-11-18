// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e 
// inseriamo l'immagine grande a sinistra 
// e le thumbnails sulla destra in modo da poter stilare lo slider; 
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e 
// i testi delle immagini dinamicamente servendoci dell'array fornito e 
// un semplice ciclo for che concatena un template literal. 
// Al termine di questa fase ci ritroveremo con lo stesso slider, 
// ma costruito dinamicamente attraverso JavaScript.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Seleziono i contenitori ai quali andrò ad appendere i div conteneti le immagini grandi e le miniature
const imgContainer = document.querySelector(`.img-container`)
const thumbsContainer = document.querySelector(`.thumbs-img`)

// Con il ciclo for vado a selezionare gli elementi contenuti nelle array li assegno a delle varianti che andranno a popolare i div che dovrò appendere
for (let i = 0; i < items.length; i++) {
    const thisImg = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    const newImage = `
        <div class="single-img">
            <img src="${thisImg}" alt="${i}">
            <div class="single-img-text">
                <h3>${thisTitle}</h3>
                <p>${thisText}</p>
            </div>
        </div>
    `;

    imgContainer.innerHTML += newImage;

    const newImageThumbs = `
        <div class="single-thumbs-img">
            <img src="${thisImg}" alt="${i}">
        </div>
    `;

    thumbsContainer.innerHTML += newImageThumbs;
}

// Seleziono l'immagine alla quale assegnare la classe active
let selectImage = 0;
const bigImgs = document.getElementsByClassName('single-img');
const thumbsImgs = document.getElementsByClassName('single-thumbs-img');
bigImgs[selectImage].classList.add('active');
thumbsImgs[selectImage].classList.add('activegrey');

// Quando si clicca sulle frecce che appaioni nel thumbs vengono rimosse le classi "active" alle immagini selezionate
const upArrow = document.querySelector(`.top`);
upArrow.addEventListener(`click`, function(){
    bigImgs[selectImage].classList.remove(`active`)
    thumbsImgs[selectImage].classList.remove(`activegrey`)
    if( selectImage < items.length - 1 ) {
        selectImage++;
        console.log(selectImage)
    } else {
        selectImage = 0;
    }
    bigImgs[selectImage].classList.add('active');
    thumbsImgs[selectImage].classList.add('activegrey');
})



