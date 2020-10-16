import {takeLatest,call,put,select} from "@redux-saga/core/effects";
import {GET_LIST} from "./Types";
import {toast} from "react-toastify";
import * as Services from "../../Services/index";
import {TableActions} from "./Slice";
import {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../Reducers";

function* getList({payload}: PayloadAction<{currentPage: number}>) {
  try {
    const { pages } = yield select((state: RootState) => state.tableReducer);
    if (pages[payload.currentPage]) {
      return yield put(TableActions.setCurrentPage(payload));
    }
    const res = yield call (Services.getCharactersService, payload.currentPage);
    if (res.success) {
      yield put(TableActions.setCurrentPage({currentPage: payload.currentPage, totalPages: res.info.pages, items: res.results}));
    } else {
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
