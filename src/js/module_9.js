import * as basicLightbox from 'basiclightbox';

const box = document.querySelector('.js-box');
const timeText = document.querySelector('.js-time');
const timeText2 = timeText.nextElementSibling;
const timeText3 = timeText2.nextElementSibling;
const timeText4 = timeText3.nextElementSibling;
const timeText5 = timeText4.nextElementSibling;
const timeText6 = timeText5.nextElementSibling;
const timeText7 = timeText6.nextElementSibling;

const date = new Date();

timeText.textContent = date;
timeText2.textContent = 'День місяця: ' + date.getDate();

const days = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Суббота',
];

timeText3.textContent = 'День тижня: ' + days[date.getDay()];
timeText4.textContent = 'Рік: ' + date.getFullYear();

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

timeText5.textContent = 'Місяць: ' + months[date.getMonth()];
timeText6.textContent = `Час: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;
timeText7.textContent = Date.now();

// const timer = document.querySelector('.js-timerBox');
// const timer__counter = document.querySelector('.js-counter');

// // console.log(timer__counter);

// let counter = 10;

// setTimeout(() => {
//   timer.style.display = 'block';
//   const intervalId = setInterval(() => {
//     timer__counter.textContent = counter;
//     if (!counter) {
//       timer__counter.textContent = 'x';
//       clearInterval(intervalId);
//       timer__counter.addEventListener('click', onClick);
//     }
//     counter -= 1;
//   }, 1000);
// }, 5000);

// function onClick() {
//   timer.style.display = 'none';
// }

const timer = document.querySelector('.js-timerBox');
const timer__counter = document.querySelector('.js-counter');

let counter = 22;

setTimeout(() => {
  const instance = basicLightbox.create(
    `
          <div class="modal">
              <div class="timer js-timerBox">
                  <h2 class="timer__title">Реклама</h2>
                  <p class="timer__text">
                      Реклама вимкнеться через:
                      <span class="timer__counter js-counter">${counter}</span>
                  </p>
              </div>
          </div>
      `,
    {
      closable: false,
    }
  );

  instance.show(() => {
    const value = document.querySelector('.js-counter');
    const intervalId = setInterval(() => {
      value.textContent = counter;

      if (!counter) {
        clearInterval(intervalId);
        instance.close();
      }

      counter -= 1;
    }, 1000);
  });
}, 5000);
