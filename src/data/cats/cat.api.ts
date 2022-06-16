import { Cat } from "../models/Cat";

export const getCatsData = async (): Promise<Cat[]> => {
  const response = await fetch(
    "https://cataas.com/api/cats?limit=20"
  ).then<Cat[]>((data) => data.json());

  return response;
};
