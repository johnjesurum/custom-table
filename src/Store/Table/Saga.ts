import {takeLatest,call,put} from "@redux-saga/core/effects";
import {GET_LIST} from "./Types";
import {toast} from "react-toastify";
import * as Services from "../../Services/index";
import {TableActions} from "./Slice";

function* getList() {
  try {
    const res = yield call (Services.getCharactersService);
    if (res.success) {
      yield put(TableActions.setList(res));
    }else {
      throw Error(res);
    }
  } catch (e) {
    console.log(e);
    toast.error(e);
  }
}

export function* tableSaga() {
  yield takeLatest(GET_LIST, getList);
}
