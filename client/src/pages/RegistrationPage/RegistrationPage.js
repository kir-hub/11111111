import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import LinkLogo from '../../components/LinkLogo/index';
import FormError from '../../components/FormError/FormError'

import faq from './RegistrationPageArticle.json';
import Question from '../../components/Question/Question';

const RegistrationPage = (props) => {
  props.clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

//   const faqElements = faq.map((question, index) => (
//     <div key={index}>
//       <div className={styles.headerArticle}>{question.header}</div>
//       <div className={styles.article}>{question.body}</div>
//     </div>
// ));
    
  

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <LinkLogo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        {/* {error && <Error data={error.data} status={error.status} clearError={authClear}/>} */}
        <div className={styles.headerFormContainer}>
          <h2>CREATE AN ACCOUNT</h2>
          <h4>We always keep your name and email address private.</h4>
        </div>
        <RegistrationForm />
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>

          <div className={styles.ColumnContainer}>
            {/* {faqElements} */}
              {/* <Question key={index} body={question.body} header={question.header}/> */}
              <Question/>
            <div className={styles.headerArticle}>
              I have other questions! How can I get in touch with Squadhelp?
            </div>
            <div className={styles.article}>
              Check out our <span className={styles.orangeSpan}>FAQs</span> or
              send us a <span className={styles.orangeSpan}>message</span>. For
              assistance with launching a contest, you can also call us at (877)
              355-3585 or schedule a{' '}
              <span className={styles.orangeSpan}>Branding Consultation</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
