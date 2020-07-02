import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PhotosGrid } from "../../screens/PhotosGrid/PhotosGrid";
import { PhotoDetailed } from "../../screens/PhotoDetailed/PhotoDetailed";

const Stack = createStackNavigator();

export const PhotosFeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='PhotosGrid' component={PhotosGrid} />
      <Stack.Screen name='PhotoDetailed' component={PhotoDetailed} />
    </Stack.Navigator>
  );
};
