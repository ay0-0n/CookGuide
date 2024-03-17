import PropTypes from 'prop-types';

const Button = ({type, text}) => {
  let buttonSizeClass = '';
  switch (type) {
    case 'sml':
      buttonSizeClass = 'px-4 py-2 bg-primary hover:bg-primary-dark hover:text-white';
      break;
    case 'mid':
      buttonSizeClass = 'w-[170px] h-[49px] justify-center items-center text-lg text-txt bg-primary hover:bg-primary-dark hover:text-white';
      break;
    case 'big':
      buttonSizeClass = 'w-[195px] h-[60px] justify-center items-center text-xl text-txt bg-primary hover:bg-primary-dark hover:text-white';
      break;
    case 'big-t':
      buttonSizeClass = 'w-[195px] h-[60px] justify-center items-center text-xl text-white bg-transparent border-2 border-white hover:bg-white hover:text-primary';
      break;
  }

  return (
    <button className={`rounded-[50px] ${buttonSizeClass}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
