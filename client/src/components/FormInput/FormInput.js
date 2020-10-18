import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    placeholder,
    input, type,
    inputStyles,
    invalidStyles,
    validStyles,
    meta: { touched, error },
} = props;
  const inputClassName = classNames(inputStyles, {
    [invalidStyles]: touched && error,
    [validStyles]: touched && !error,
  });
  return (
    <input {...input}
           placeholder={placeholder}
           type={type}
           className={inputClassName}/>
);
};

// FormInput.propTypes = {
//   label: PropTypes.string,
//   input: PropTypes.object,
//   type: PropTypes.string,
//   container: PropTypes.string,
//   notValid: PropTypes.string,
//   valid: PropTypes.string,
//   warning: PropTypes.string,
// };

export default FormInput;
