import { Cat } from "../models/Cat";

export const getCatsData = async (): Promise<Cat[]> => {
  const response = await fetch(
    "https://cataas.com/api/cats?limit=20"
  ).then<Cat[]>((data) => data.json());

  return response;
};

export const setInLocalStorage = (id:string) => {
  const storageValue = localStorage.getItem('favouriteCats')
  let favoriteCatsArray:string[]= [];

  if (storageValue) {
    const value = JSON.parse(storageValue)
    favoriteCatsArray = value
    favoriteCatsArray.push(id)
    localStorage.setItem('favouriteCats', JSON.stringify(favoriteCatsArray))

  } else {
    favoriteCatsArray.push(id)
    localStorage.setItem('favouriteCats', JSON.stringify(favoriteCatsArray))
  }
}