import './form-input.styles.jsx';
import { FormInputLabel, Group, Input } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group className='group'>
      <Input className='form-input' {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
