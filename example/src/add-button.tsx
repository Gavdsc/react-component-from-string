import {useContext} from "react";
import {CountContext} from "./count-context";

export const AddButton = () => {
    const {state, dispatch} = useContext(CountContext);

    return (
        <button
            onClick={() => dispatch(1)}>
            Add 1
        </button>
    );
}