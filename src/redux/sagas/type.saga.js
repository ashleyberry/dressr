import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// gets the types via the router
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

// gets selected clothing's type from database via the router
function* getRecentTypeSaga( action ) {
    console.log( 'made it into getRecentTypeSaga!', action.payload )
    let response = yield axios({
        method: 'GET',
        url: `/api/type/${ action.payload }`
    });
	console.log( 'getRecentTypeSaga response:', response.data );
	yield put({
        type: 'SET_TYPE',
        payload: response.data
        })
    console.log( 'type schtuff', response.data )
} // end getRecentTypeSaga



function* typeSaga() {
    yield takeEvery( 'FETCH_TYPES', getTypesSaga );
    yield takeLatest( 'FETCH_TYPE', getRecentTypeSaga );
}

export default typeSaga;