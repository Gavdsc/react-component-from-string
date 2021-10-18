import {useContext} from "react";
import {CountContext} from "./count-context";

export const Counter = () => {
    const {state} = useContext(CountContext);

    return (
        <p>useReducer: {state}</p>
    );
}