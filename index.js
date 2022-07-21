import registerRootComponent from "expo/build/launch/registerRootComponent";
import App from "./src";

if (!__DEV__) {
  console.log = () => {};
}

registerRootComponent(App);
