import './button.scss';

const BUTTON_CLASS_TYPES = {
  google: 'google-sign-in',
  inverted: 'inversted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASS_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
