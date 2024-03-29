import React from 'react';
import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
