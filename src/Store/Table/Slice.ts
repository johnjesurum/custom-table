import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CurrentPageParams, Pages, serviceResponseType, TableReducerType} from "./Types";
import {Character} from "../../Models/Character";

const initialState: TableReducerType = {
  list: [],
  pages: {},
  currentPage: 0,
  totalPages: 0,
  selectedElement: 0
};



const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    getList(state, {payload}: PayloadAction<any>) {
    },
    setList(state: TableReducerType, {payload}: PayloadAction<serviceResponseType>) {
      state.list = payload?.results;
    },
    setCurrentPage(state, {payload}: PayloadAction<CurrentPageParams>) {
      state.currentPage = payload.currentPage;
      if (payload.items) {
        state.pages[payload.currentPage] = payload.items;
        state.list = payload.items;
      } else {
        state.list = state.pages[payload.currentPage];
      }
      if (payload.totalPages) {
        state.totalPages = payload.totalPages;
      }
    },
    handleChecked(state, {payload}: PayloadAction<{ checked: boolean, character: Character }>) {
      if (payload.checked) {
        state.selectedElement += 1;
      } else {
        state.selectedElement -= 1;
      }
      let selectedPage = state.pages[state.currentPage];
      state.pages[state.currentPage] = [...selectedPage.map((character: Character) => {
        if (character.id === payload.character.id) {
          return {...payload.character, selected: payload.checked};
        } else {
          return character;
        }
      })];
    },
    checkAll(state, {payload}: PayloadAction<boolean>) {
      let selectedPage = state.pages[state.currentPage];
      state.pages[state.currentPage] = [...selectedPage.map((character: Character) => {
        if (payload) {
          state.selectedElement += selectedPage.length;
        }else {
          state.selectedElement -= selectedPage.length;
        }
        return {...character, selected: payload};
      })];
    },
    editCharacter(state, {payload}: PayloadAction<Character>) {
      let selectedPage = state.pages[state.currentPage];
      state.pages[state.currentPage] = [...selectedPage.map((character: Character) => {
        if (character.id === payload.id) {
          return {...payload, selected:false};
        } else {
          return character;
        }
      })];
      state.selectedElement = 0;
    },
    deleteSelectedCharacters(state) {
      state.pages = Object.keys(state.pages)
        .map(key => parseInt(key, 10))
        .reduce((acc: Pages, key: number) => {
          const currentPage = acc[key];
          acc[key] = currentPage.filter((c: Character) => !c.selected)
          return acc;
        }, state.pages);
      state.selectedElement = 0;
    }
  }
});

export const TableActions = TableSlice.actions;

export default TableSlice.reducer;
