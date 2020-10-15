import {Origin} from "./Origin";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type : string;
  gender:string;
  image: string;
  url: string;
  created: Date | string;
  episode: string[];
  origin: Origin;
  location:Origin;
  selected?:boolean;
}
