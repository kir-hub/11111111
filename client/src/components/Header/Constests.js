import React from 'react'
import CONSTANTS, {PHONE_NUMBER} from '../../constants';
import styles from './Header.module.sass';

export default function Constests() {
    return (
        <li>
                                    <span>CONTESTS</span><img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                                              alt='menu'/>
                                    <ul>
                                        <li className={styles.first}><a href="http://www.google.com">HOW IT WORKS</a></li>
                                        <li><a href="http://www.google.com">PRICING</a></li>
                                        <li><a href="http://www.google.com">AGENCY SERVICE</a></li>
                                        <li><a href="http://www.google.com">ACTIVE CONTESTS</a></li>
                                        <li><a href="http://www.google.com">WINNERS</a></li>
                                        <li><a href="http://www.google.com">LEADERBOARD</a></li>
                                        <li className={styles.last}><a href="http://www.google.com">BECOME A
                                            CREATIVE</a></li>
                                    </ul>
                                </li>
    )
}
