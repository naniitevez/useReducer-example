import * as React from "react";
import { Dispatch } from "react";
import { DispatchObject } from "../utils/types";

type FuncType = (dispatch: React.Dispatch<any>) => Promise<DispatchObject>;

type ObjectAction = { type: string };

type FuncOrObjectType = FuncType | ObjectAction;

function isObjectAction(
  dispatchFunc: FuncOrObjectType
): dispatchFunc is ObjectAction {
  return (<ObjectAction>dispatchFunc)?.type !== undefined;
}

function isFuncType(dispatchFunc: any): dispatchFunc is FuncType {
  return (<FuncType>dispatchFunc).name !== undefined;
}

export function wrapAsync(dispatch: Dispatch<DispatchObject>) {
  return (func: any, ...args: any) => {
    if (typeof func === "object" && func.type) {
      dispatch(func);
      return;
    }

    if (isFuncType(func)) {
      resolveDispatchFunc(func, dispatch);
    }

    const dispatchFunc = func(...args);

    if (typeof dispatchFunc === "object" && dispatchFunc.type) {
      dispatch(dispatchFunc);
      return;
    }

    if (typeof dispatchFunc === "function") {
      resolveDispatchFunc(dispatchFunc, dispatch);
    }
  };
}

function resolveDispatchFunc(dispatchFunc: FuncType, dispatch: Dispatch<any>) {
  const result = dispatchFunc(dispatch);

  if (typeof result === "object" && result.then) {
    result.then((dispatchObject?: DispatchObject) => {
      if (dispatchObject && dispatchObject.type) {
        dispatch(dispatchObject);
      }
    });
  }
}
