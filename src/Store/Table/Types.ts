import {Character} from "../../Models/Character";

export const GET_LIST = "Table/getList";

interface infoType {
  count: number;
  pages: number;
  next: string | null;
  prev:string | null;
}

export type Pages = { [key: number]: Character[] }

export interface TableReducerType {
  list: Character[],
  pages:  Pages;
  currentPage: number;
  totalPages: number;
  selectedElement:number;
}


export interface serviceResponseType {
  info: infoType;
  results: Character[] | [];
}

export interface CurrentPageParams {
  currentPage: number;
  totalPages?: number;
  items?: Character[]
}
