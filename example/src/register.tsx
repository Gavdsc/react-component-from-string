import {registerComponent} from "../../index";
import TestComponent from "./test-component";
import {Counter} from "./counter";
import {AddButton} from "./add-button";

/**
 * Register all components
 */
export function registerComponents() {
    registerComponent("TestComponent", TestComponent);
    registerComponent("Counter", Counter);
    registerComponent("AddButton", AddButton);
}