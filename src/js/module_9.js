// import * as basicLightbox from 'basiclightbox';

const box = document.querySelector('.js-box');
const timeText = document.querySelector('.js-time');
const timeText2 = timeText.nextElementSibling;
const timeText3 = timeText2.nextElementSibling;
const timeText4 = timeText3.nextElementSibling;
const timeText5 = timeText4.nextElementSibling;
const timeText6 = timeText5.nextElementSibling;
const timeText7 = timeText6.nextElementSibling;

const days = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Суббота',
];

const months = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

setInterval(() => {
  const date = new Date();
  timeText.textContent = date;
  timeText2.textContent = 'День місяця: ' + date.getDate();
  timeText3.textContent = 'День тижня: ' + days[date.getDay()];
  timeText4.textContent = 'Рік: ' + date.getFullYear();
  timeText5.textContent = 'Місяць: ' + months[date.getMonth()];
  timeText6.textContent = `Час: ${date
    .getHours()
    .toString()
    .padStart(2, '0')} : ${date
    .getMinutes()
    .toString()
    .padStart(2, '0')} : ${date.getSeconds().toString().padStart(2, '0')} `;
  timeText7.textContent = Date.now();
}, 1000);

const timer = document.querySelector('.js-timerBox');
const timer__counter = document.querySelector('.js-counter');

// console.log(timer__counter);

let counter = 10;

setTimeout(() => {
  timer.style.display = 'block';
  const intervalId = setInterval(() => {
    timer__counter.textContent = counter.toString().padStart(2, '0');
    if (!counter) {
      timer__counter.textContent = 'x';
      clearInterval(intervalId);
      timer__counter.addEventListener('click', onClick);
    }
    counter -= 1;
  }, 1000);
}, 5000);

function onClick() {
  timer.style.display = 'none';
}

// const timer = document.querySelector('.js-timerBox');
// const timer__counter = document.querySelector('.js-counter');

// let counter = 22;

// setTimeout(() => {
//   const instance = basicLightbox.create(
//     `
//           <div class="modal">
//               <div class="timer js-timerBox">
//                   <h2 class="timer__title">Реклама</h2>
//                   <p class="timer__text">
//                       Реклама вимкнеться через:
//                       <span class="timer__counter js-counter">${counter}</span>
//                   </p>
//               </div>
//           </div>
//       `,
//     {
//       closable: false,
//     }
//   );

//   instance.show(() => {
//     const value = document.querySelector('.js-counter');
//     const intervalId = setInterval(() => {
//       value.textContent = counter;

//       if (!counter) {
//         clearInterval(intervalId);
//         instance.close();
//       }

//       counter -= 1;
//     }, 1000);
//   });
// }, 5000);

// NOTIFICATIONS

const refs = {
  notification: document.querySelector('.js-note'),
};

refs.notification.addEventListener('click', onClick);

let timeoutId = null;

timeoutId = setTimeout(() => {
  closeNotification(refs.notification);
}, 10000);

function onClick(evt) {
  closeNotification(evt.target);
  clearTimeout(timeoutId);
}

function closeNotification(element) {
  element.style.translate = '320px 0';
}
