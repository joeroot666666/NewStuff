import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import { check, openSettings, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { name as appName } from "../../app.json";

export const showMsg = (text, type) => {
  showMessage({
    message: text,
    type: type || "danger",
    duration: 2500,
  });
};

export const CheckPermission = async (cancelBtn, permission, message) => {
  if (Platform.OS === "android") {
    const hasPermission = await PermissionsAndroid.check(permission);
    if (!hasPermission) {
      if (PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN || PermissionsAndroid.RESULTS.DENIED) {
        cancelBtn?.();
        Alert.alert(
          appName,
          message,
          [
            {
              text: "Dont Allow",
              style: "cancel",
            },
            {
              text: "Allow",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
          { cancelable: false }
        );
      }
    }
  } else if (Platform.OS === "ios") {
    check(permission).then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
          request(PERMISSIONS.IOS.CAMERA);
          break;
        case RESULTS.BLOCKED:
          Alert.alert(appName, message, [
            {
              text: "Dont Allow",
              style: "cancel",
            },
            { text: "Allow", onPress: () => openSettings() },
          ]);
          break;
      }
    });
  }
};
