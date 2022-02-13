/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import KeyboardManager from "react-native-keyboard-manager";

console.disableYellowBox = true;
if (Platform.OS === "ios") {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setShouldToolbarUsesTextFieldTintColor(true);
  KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(false);
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}

AppRegistry.registerComponent(appName, () => App);
