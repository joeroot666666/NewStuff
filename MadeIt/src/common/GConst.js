import { PermissionsAndroid, Platform } from "react-native";
import { PERMISSIONS } from "react-native-permissions";

// export const mailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const mailRegx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
export const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,13})/;
export const nameRegx = /^[A-z ]{3,}$/;
export const phoneRegx = /^\d{8,13}$/;
export const aadharRegx = /^\d{12}$/;
export const OTPRegx = /^\d{4}$/;
export const creditCardRegx = /^\d{19}$/;
export const cvvRegx = /^\d{3,4}$/;
export const ExpiryRegx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
export const CardRegx = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/;
export const vehicalNumberRegx = /^[a-zA-Z0-9-_/]*$/;
export const accountNumberRegx = /^[0-9]{9,18}$/;
export const ifscCodeRegx = /^[A-Z0-9]{7,11}$/;
// export const amountRegx = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
export const amountRegx = /^([1-9]{1}(\d{1,5})?)(\.\d{1,2})?$/;

export const cameraPermission = Platform.select({ ios: PERMISSIONS.IOS.CAMERA, android: PermissionsAndroid.PERMISSIONS.CAMERA });
export const galleryPermission = Platform.select({ ios: PERMISSIONS.IOS.PHOTO_LIBRARY, android: PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE });
export const cameraPermissionMsg = "Would Like to Access the Camera";
export const galleryPermissionMsg = "Would Like to Access Your Photos";
