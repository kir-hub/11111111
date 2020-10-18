import React from 'react'
import faq from '../../pages/RegistrationPage/RegistrationPageArticle.json';
import styles from '../../pages/RegistrationPage/RegistrationPage.module.sass'

export default function Question(props) {


    const {header, body} = props

    const faqElements = faq.map((question, index) => (
        <div key={index}>
          <div className={styles.headerArticle}>{question.header}</div>
          <div className={styles.article}>{question.body}</div>
        </div>
    ));

    return (
        <div>
            {faqElements}
        </div>
    )
}
