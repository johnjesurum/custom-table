import {all} from "@redux-saga/core/effects"
import {tableSaga} from "./Table/Saga";

export default function* rootSaga() {
  yield all([
    tableSaga()
  ])
};
