import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";
export const addcounter = (number) => ({
  type: ADD_NUMBER,
  number: number + 1,
});
export const subcounter = (number) => ({
  type: SUB_NUMBER,
  number: number - 1,
});
