import { CatActions } from "./cat.action";
import { CatState } from "./cat.state";

export function catReducer(state: CatState, action: CatActions) {
  switch (action.type) {
    case "set-cats":
      return { ...state, cats: action.cats };
    case "set-loading":
      return { ...state, isLoading: action.isLoading };
    case "set-favourite-cats":
      return { ...state, favouriteCats: [...state.favouriteCats, action.id]  };
  }
}
