import * as React from "react";
import {registerComponents} from "./register";
import {buildFromRegister} from "../../index";
import {useReducer} from "react";
import {CountContext} from "./count-context";
import {addReducer} from "./add-reducer";

// Add components to the register
registerComponents();

// Setup dummy json
const jsonString = `
    {
        "components": [
            {
                "type": "AddButton",
                "props": {
                    "test": "test"
                }
            },
            {
                "type": "Counter",
                "props": {
                    "test": "test"
                }
            }
        ]
    }
`;

function App() {
    const [state, dispatch] = useReducer(addReducer, 0);
    let children = JSON.parse(jsonString);

    return (
        <CountContext.Provider value={{state, dispatch}}>
            { children.components.map(({type, props}: {type: string, props: object}, key: number) => buildFromRegister(type, props, {}, key)) }
        </CountContext.Provider>
    )
}

export default App;