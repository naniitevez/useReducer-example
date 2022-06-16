import { Cat } from "../models/Cat";

export interface CatState {
  cats: Cat[];
  favouriteCats: string[];
  isLoading: boolean;
}
