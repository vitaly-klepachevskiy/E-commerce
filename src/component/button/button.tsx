import React from 'react';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';

export enum BUTTON_CLASS_TYPES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inversted',
}

const getButton = (buttonType = BUTTON_CLASS_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_CLASS_TYPES.base]: BaseButton,
    [BUTTON_CLASS_TYPES.google]: GoogleSignInButton,
    [BUTTON_CLASS_TYPES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_CLASS_TYPES;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
