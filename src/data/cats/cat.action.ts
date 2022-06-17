import { Cat } from "../models/Cat";
import { ActionType } from "../../utils/types";
import { getCatsData, setInLocalStorage } from "./cat.api";

export const loadCats = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));

  const cats = await getCatsData();
  dispatch(setCats(cats));

  dispatch(setLoading(false));
};

export const setLoading = (isLoading: boolean) =>
  ({
    type: "set-loading",
    isLoading,
  } as const);

export const setCats = (cats: Cat[]) =>
  ({
    type: "set-cats",
    cats,
  } as const);

export const setFavouriteCats = (id: string) => {
  setInLocalStorage(id)
  
  return {
    type: "set-favourite-cats",
    id
  } as const;
};

export type CatActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setCats>
  | ActionType<typeof setFavouriteCats>;
