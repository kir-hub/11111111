import React from 'react';
import styles from './Gb.module.sass';
import { Link } from 'react-router-dom';

export default function GradientButton() {

  
  return (
    <div className={styles.blueTip}>
                    <span>Ready to get started? Launch a contest and start receiving submissions
                        instantly.
                        
                    </span><Link to='/startContest'>
                         <i className='far fa-lightbulb mr-1'/>
                            start A Contest
                        </Link>
                    </div>
  );
}
