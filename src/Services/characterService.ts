import axios from 'axios';
import {addSuccessFlag} from "../Utils/Utils";

const BASE_URL = "https://rickandmortyapi.com/";

export const getCharactersService = (currentPage:number) => {

  return axios.get(`${BASE_URL}api/character/?page=${currentPage}`)
    .then(res => (addSuccessFlag(res?.data)))
    .catch(error => error);
};

export const getCharacterDetail = (param: string) => {
  return axios.get(`${BASE_URL}${param}`)
    .then(res => res)
    .catch(error => error)
};
