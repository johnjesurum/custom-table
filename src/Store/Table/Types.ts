import {Character} from "../../Models/Character";

export const GET_LIST = "Table/getList";

interface infoType {
  count: number;
  pages: number;
  next: string | null;
  prev:string | null;
}

export interface TableReducerType {
  list: Character[],
  pages: { [key: number]: Character[] } ;
  currentPage: number;
  totalPages: number;
  selectedElement:Character[];
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
