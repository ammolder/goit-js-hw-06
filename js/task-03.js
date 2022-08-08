const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
const addMarking = images
  .map(
    (image) =>
      `<li class='task3__item'><img class='task3__img' src=${image.url} alt='${image.alt}'></li> `
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", addMarking);
console.log(galleryEl);

//Варіант 2 (не по умові)

// const addImages = (images) => {
//   return images.map((image) => {
//     const imageEl = document.createElement("img");
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.classList.add("gallery__img");
//     return imageEl;
//   });
// };
// const result = addImages(images);

// const addMarking = (addMarkingEl) => {
//   return addMarkingEl.map((element) => {
//     const markingEl = document.createElement("li");
//     markingEl.classList.add("gallery__item");
//     markingEl.append(element);
//     return markingEl;
//   });
// };

// const addMarkingDoc = addMarking(result);

// galleryEl.append(...addMarkingDoc);

// console.log(galleryEl);
