import React from 'react';
import styles from './RegistrationForm.module.sass';

export default function RegistrationTitle() {
  return (
    <div>
      <div className={styles.headerFormContainer}>
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
      </div>
    </div>
  );
}
