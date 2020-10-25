import ACTION from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
    statement: {},
    transactions: [],
    isFetchingTransactions: false,
    error: null,
};


function transactionReducer (state = initialState, actions) {   
    switch (actions.type){
        case ACTION.GET_TRANSACTIONS_REQUEST: {
            return{
                ...state,
                isFetchingTransactions: true,

            }
        }
        case ACTION.GET_TRANSACTIONS_SUCCESS: {
            return{
                ...state,
                isFetchingTransactions: false,

            }
        }
        case ACTION.GET_TRANSACTIONS_ERROR: {
                return{
                    ...state,
                    isFetchingTransactions: false,
                    error: action,error,
                }
            }
            default:{
                return {...state};
            }
    }

}

export default transactionReducer;