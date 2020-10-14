import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getClothingSaga( action ) {
    console.log( 'in get clothing Saga with:', action );
    let response = yield axios ({
        method: 'GET',
        url: `/api/clothing`
    })
    console.log('getClothingSaga response:', response.data);
    yield put({
        type: 'SET_CLOTHING',
        payload: response.data
    })
}

function* clothingSaga() {
    yield takeEvery('FETCH_CLOTHING', getClothingSaga)
}

export default clothingSaga;