import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// gets the genres via the router
function* getTypesSaga( action ) {
    console.log( 'in getTypesSaga:', action )
    let response = yield axios({
        method: 'GET',
        url: '/api/type'
    });
    console.log( 'getTypesSaga response:', response.data );
    // setting our type reducer with response
	yield put({
	    type: 'SET_TYPES',
	    payload: response.data
    })
    console.log( 'these are our types', response.data )
} // end getGenresSaga


function* typeSaga() {
    yield takeEvery('FETCH_TYPES', getTypesSaga)
}

export default typeSaga;