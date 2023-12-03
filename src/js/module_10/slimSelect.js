import SlimSelect from 'slim-select';
import '../../../node_modules/slim-select/dist/slimselect.css';

const slimSelected = () => {
  new SlimSelect({
    select: document.querySelector('.my-select'),
    settings: {
      showSearch: false,
    },
  });
};

export { slimSelected };
