import React from 'react';

import styles from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;
  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <div className={styles.loginForm}>
      {' '}
      {/*включил стили потому что не работали*/}
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          classes={formInputClasses}
          component={FormInput}
          type="text"
          label="Email Address"
        />
        <Field
          name="password"
          classes={formInputClasses}
          component={FormInput}
          type="password"
          label="password"
        />
        <button
          type="submit"
          disabled={submitting}
          className={styles.submitContainer}
        >
          <span className={styles.inscription}>LOGIN</span>
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.LoginSchem),
})(LoginForm);

// LoginForm.propTypes = {
//   handleSubmit: PropTypes.func,
//   submitting: PropTypes.func,
// };

// LoginForm.defaultProps = {
//   handleSubmit: ,
//   submitting: ,
// };

// const mapStateToProps = (state) => {
//     const {auth} = state;
//     return {auth};
// };

// const mapDispatchToProps = (dispatch) =>(
//     {
//         loginRequest: (data) =>dispatch(authActionLogin(data)),
//         authClear: () => dispatch(clearAuth())
//     }
// )

// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//     form: "login",
//     validate: customValidator(Schems.LoginSchem)
// })(LoginForm));
