import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addClothingSaga( action ) {
    console.log( 'in addClothingSaga with:', action );
    yield axios({
        method: 'POST',
        url: '/api/clothing',
        data: action.payload
    })
    console.log( 'back from ADD_ITEM with:' );
    yield put({
        type: 'FETCH_CLOTHING',
    })
}

function* editClothingSaga( action ) {
    console.log( 'in editClothingSaga with', action )
    yield axios({
        method: 'PUT',
        url: `/api/clothing/${action.payload.id}`,
        data: action.payload
    })
    yield put({
        type: 'FETCH_CLOTHING',
    })
}

function* getClothingSaga( action ) {
    console.log( 'in get clothing Saga with:', action );
    let response = yield axios ({
        method: 'GET',
        url: '/api/clothing'
    })
    console.log('getClothingSaga response:', response.data);
    yield put({
        type: 'SET_CLOTHING',
        payload: response.data
    })
}

function* clothingSaga() {
    yield takeEvery('FETCH_CLOTHING', getClothingSaga)
    yield takeLatest( 'ADD_ITEM', addClothingSaga )
    yield takeLatest( 'UPDATE_ITEM', editClothingSaga )
}

export default clothingSaga;