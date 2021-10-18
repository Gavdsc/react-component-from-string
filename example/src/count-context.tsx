import {createContext, Dispatch} from "react";

interface ICountState {
    state: number,
    dispatch: Dispatch<number>;
}

export const CountContext = createContext({} as ICountState);