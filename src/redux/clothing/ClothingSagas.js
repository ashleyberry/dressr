import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { setClothingAction } from "./ClothingSlice";

function* getClothingSaga() {
  const { response, error } = yield axios({
    method: "GET",
    url: "/api/clothing",
  });
  if (response) {
    yield put(setClothingAction(response.data));
  } else {
    console.log("error in getClothingSaga", error);
  }
}

export function* clothingSagas() {
  yield takeEvery("FETCH_CLOTHING", getClothingSaga);
}
