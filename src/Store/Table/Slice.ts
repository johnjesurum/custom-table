import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {serviceResponseType, TableReducerType} from "./Types";

const initialState: TableReducerType = {
  list: [],
  pages:{},
  info: null,
  currentPage: 1,
  totalPages: 0
};

const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    getList(state){},
    setList(state:TableReducerType,{payload}:PayloadAction<serviceResponseType>){
      state.list = payload?.results;
      state.info = payload?.info;
    },
    prevPage(){},
    nextPage(){},

  }
});

export const TableActions = TableSlice.actions;

export default TableSlice.reducer;
