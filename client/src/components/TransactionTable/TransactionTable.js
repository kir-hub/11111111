import React , {useState}  from 'react'
import  styles from "./TransactionTable.module.sass"
import PropTypes from "props-types"
import CONSTANTS from '../../constants';



const TransactionTable = props =>{
    const {data, className} = props;
    return(
        <table className={className}>
            <TableHead/>
            <tbody>
                {
                    data.map(transaction =>(
                        <tr key ={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>
                                {
                                transaction.typeOperator === CONSTANTS.INCOME && 'Income'
                                }
                                {
                                transaction.typeOperator === CONSTANTS.EXPENSE && 'Expense'
                                }
                                </td>
                            <td>
                                {
                                    `${transaction.sum}`
                                }
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

TransactionTable.defaultProps = [{}];

TransactionTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isIncome: PropTypes.bool,
        sum: PropTypes.string,
    }))

}

export default TransactionTable;


const TableHead = () =>(
    <thead>
        <tr>
            <th>id</th>
            <th>Income/Expense</th>
            <th>Sum</th>
        </tr>
    </thead>
)
// export default function TransactionTable() {

//     const data=[
//         {
//             id: 1,
//             type: CONSTANTS.INCOME,
//             sum: 350
//         },
//         {
//             id: 2,
//             type: CONSTANTS.EXPENSE,
//             sum: -350
//         }
//     ]

//     const dataToTable = data.map( function (obj){
//         return <tr><td>{this.id}</td><td>{this.type}</td><td>{this.sum}</td></tr>
//     } ) 
 
//     const {handleSubmit} = this.props;
//     return (
//         <div>
//             <table className={styles.tableCont}>
//                 <tr> <th>id</th><th>INCOME/EXPENSE</th><th>sum</th></tr>
//                 <tr><td>{data[0].id}</td><td>{data[0].type}</td><td>{data[0].sum}</td></tr>
//                 <tr><td>{data[1].id}</td><td>{data[1].type}</td><td>{data[1].sum}</td></tr>
//                 {dataToTable}
//             </table>
//         </div>
//     )
// }