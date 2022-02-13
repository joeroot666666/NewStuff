import * as icons from "../assets/icons";
import * as images from "../assets/images";
// import * as logos from '../assets/logos';
import * as GColors from "./GColors";
import * as commonFont from "./commonFont";
import { Dimensions } from "react-native";

export { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
export { GColors, commonFont, images, icons };

export const { width, height } = Dimensions.get("screen");
