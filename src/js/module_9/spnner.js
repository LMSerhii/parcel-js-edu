import { Notify } from 'notiflix/build/notiflix-notify-aio';

const spinner = () => {
  const refs = {
    btn: document.querySelector('.js-btn'),
    box: document.querySelector('.js-game-box'),
  };
  refs.btn.addEventListener('click', onClick);

  function onClick() {
    const result = [];

    [...refs.box.children].forEach(item => (item.textContent = ''));
    [...refs.box.children].forEach((item, iter) => {
      createPromise(iter)
        .then(value => {
          item.textContent = value;
          result.push('1');
        })
        .catch(value => (item.textContent = value))
        .finally(() => {
          setTimeout(() => {
            if (iter === refs.box.children.length - 1) {
              if (!result.length || result.length === 3) {
                Notify.success('YOU WIIIIIIN!!!');
              } else {
                Notify.failure('You looose!');
              }
            }
          }, 500);
        });
    });
  }

  function createPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();

        if (random > 0.5) {
          resolve('😎');
        } else {
          reject('☠️');
        }
      }, 1000 * delay);
    });
  }
};

export { spinner };
