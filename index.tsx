import * as React from "react";
import {FunctionComponent, ReactElement} from "react";

/**
 * Interface: For mapped objects
 */
interface ObjectMap {
    [key: string] : any
}

/**
 * ObjectMap: Object map library
 */
const componentRegistry: ObjectMap = {};

/**
 * Function: Register component type and element constructor
 * @param type
 * @param constructor
 */
export function registerComponent(type: string, constructor: FunctionComponent) {
    componentRegistry[type] = constructor;
}

/**
 * Function: Return component constructors
 * @param type
 */
export function getComponent(type: string): FunctionComponent {
    return componentRegistry[type];
}

/**
 * Function: Build elements from register
 * @param type
 * @param props
 * @param stateProps - For prop drilling
 * @param key
 */
export function buildFromRegister(type: string, props: object = {}, stateProps: object = {}, key: number = 0): ReactElement | null {
    try {
        const component = getComponent(type);

        if (component == undefined) throw new Error(`${type} is not a registered component type.`);

        return React.createElement(
            getComponent(type),
            Object.assign(props, stateProps, {key: key})
        );

    } catch (error) {
        console.error(error);
        return null;
    }
}

