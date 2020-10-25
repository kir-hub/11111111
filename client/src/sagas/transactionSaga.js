import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';
import { put } from 'redux-saga/effects';

export function* getTransactionsSaga() {
    try{
        const {data} = yield restController.getUserTransactions();
        yield put({
            type: ACTION.GET_TRANSACTIONS_SUCCESS,
            data,
        })
    }catch(e){
        yield put({
                type: ACTION.GET_TRANSACTIONS_ERROR,
                error: error.response,
            
        }
    }
}