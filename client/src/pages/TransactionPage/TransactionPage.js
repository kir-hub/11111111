import React from 'react'
import PropTypes from 'prop-types';
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom'
import styles from './TransactionPage.module.sass'
import CONSTANTS from '../../constants';
import {connect} from 'react-redux';
import Error from '../../components/Error/Error.js'
import Spinner from '../../components/Spinner/Spinner.js';
import {createGetTransactionsErrorTypeAction, 
    createGetTransactionsSuccessTypeAction, 
    createGetTransactionsRequestTypeAction } from '../../actions/actionCreator'




// const data=[
//             {
//                 id: 1,
//                 type: CONSTANTS.INCOME,
//                 sum: 350
//             },
//             {
//                 id: 2,
//                 type: CONSTANTS.EXPENSE,
//                 sum: -350
//             },
//             {
//                 id: 3,
//                 type: CONSTANTS.INCOME,
//                 sum: 500
//             },
//             {
//                 id: 4,
//                 type: CONSTANTS.EXPENSE,
//                 sum: -500
//             },
//         ]


const TransactionPage = props =>{
    const {getTransactions, transactions, statement: {income, expense}, ifFetchingTransactions, error } = props;
    return (
        <>
        <Header/>
        <div className={styles.pageWrapper}>
            {
                transactions ? <TransactionTable
                data={transactions}
                className={styles.tableContainer}/>
                : <div style={{textAlign: 'center'}}>
                    No transactions
                </div>
            }
        <Link to='/dashboard' className={styles.link}>Back to Dashboard</Link>
        </div>
        </>
    )
};

TransactionPage.propTypes = {};
export default TransactionPage;
