import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import Animated from "react-native-reanimated";
import { GColors } from "../common";
import AboutUs from "../screen/DrawerScreen/AboutUs";
import ContactUs from "../screen/DrawerScreen/ContactUs";
import FAQ from "../screen/DrawerScreen/FAQ";
import ManageVehicle from "../screen/DrawerScreen/ManageVehicle";
import MyEarning from "../screen/DrawerScreen/MyEarning";
import Notifications from "../screen/DrawerScreen/Notifications";
import PrivacyPolicy from "../screen/DrawerScreen/PrivacyPolicy";
import RateApp from "../screen/DrawerScreen/RateApp";
import ShareScreen from "../screen/DrawerScreen/ShareScreen";
import AccountDetailsStack from "./AccountDetailsStack";
import DrawerContent from "./DrawerContent";
import HomeStack from "./HomeStack";
import MyTaskStack from "./MyTaskStack";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="back"
      overlayColor="transparent"
      sceneContainerStyle={{ backgroundColor: GColors.themColor }}
      drawerContent={(props) => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Home">{(props) => <HomeStack {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="AccountDetailsStack">{(props) => <AccountDetailsStack {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="MyTaskStack">{(props) => <MyTaskStack {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="Notifications">{(props) => <Notifications {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="PrivacyPolicy">{(props) => <PrivacyPolicy {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="FAQ">{(props) => <FAQ {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="RateApp">{(props) => <RateApp {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="ShareScreen">{(props) => <ShareScreen {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="AboutUs">{(props) => <AboutUs {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="ContactUs">{(props) => <ContactUs {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="MyEarning">{(props) => <MyEarning {...props} style={animatedStyle} />}</Drawer.Screen>
      <Drawer.Screen name="ManageVehicle">{(props) => <ManageVehicle {...props} style={animatedStyle} />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};
