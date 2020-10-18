import React from 'react'
import styles from './Trans.module.sass'
import {connect} from 'react-redux';

export default function Trans() {
// function handler(event){
//     function srt(el){
//         if(!el) return 'null'
//         return el.className || el.tagName;
//     }
//     log.value += event.type + ': ' + 'target=' + str (event.target) +
//      ', relatedTarget=' + str(event.relatedTarget) + 
// }

    return (
        <div>
            <table className={styles.tableCont}>
                <tr> <th>id </th> <th>earn/spend </th> <th>sum </th> </tr>
                <tr> <td>1 </td> <td>earn </td> <td>+350$ </td> </tr>
                <tr> <td>2 </td> <td>spend </td> <td>+350$ </td> </tr>
            </table>
        </div>
    )
}


