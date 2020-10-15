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
  info: infoType | null;
  pages: { [key: number]: Character[] };
  currentPage: number;
  totalPages: number;
}


export interface serviceResponseType {
  info: infoType;
  results: Character[] | [];
}
