import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CurrentPageParams, serviceResponseType, TableReducerType} from "./Types";
import {Character} from "../../Models/Character";

const initialState: TableReducerType = {
  list: [],
  pages:{},
  currentPage: 0,
  totalPages: 0,
  selectedElement:[]
};

const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    getList(state,{payload}: PayloadAction<any>){},
    setList(state:TableReducerType,{payload}:PayloadAction<serviceResponseType>){
      state.list = payload?.results;
    },
    setCurrentPage (state, {payload}: PayloadAction <CurrentPageParams>) {
      state.currentPage = payload.currentPage;
      if (payload.items) {
        state.pages[payload.currentPage] = payload.items;
        state.list =  payload.items;
      } else {
        state.list = state.pages[payload.currentPage];
      }
      if (payload.totalPages) {
        state.totalPages = payload.totalPages;
      }
    },
    handleChecked (state,{payload}:PayloadAction<{checked: boolean, character: Character}>) {
      if(payload.checked) {
        state.selectedElement.push(payload.character);
      }else {
        state.selectedElement = state.selectedElement
          .filter((character:Character)=>(character.id !== payload.character.id));
      }
      let selectedPage = state.pages[state.currentPage];
       state.pages[state.currentPage] = [...selectedPage.map((character:Character)=>{
        if(character.id === payload.character.id ) {
          return {...payload.character, selected:payload.checked};
        }else {
          return character;
        }
       })];
    },
    editCharacter(state,{payload}: PayloadAction<Character>) {
      let selectedPage = state.pages[state.currentPage];
      state.pages[state.currentPage] = [...selectedPage.map((character:Character)=>{
        if(character.id === payload.id ) {
          return payload;
        }else {
          return character;
        }
      })];
      state.selectedElement = [];
    }
  }
});

export const TableActions = TableSlice.actions;

export default TableSlice.reducer;
