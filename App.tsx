import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PhotosFeedStack } from "./src/Stacks/PhotosFeedStack/PhotosFeedStack";
import { navigationRef } from "./src/services/Navigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <PhotosFeedStack />
    </NavigationContainer>
  );
}
