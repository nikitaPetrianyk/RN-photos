import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { IPhoto } from "../../models/Image";
import { vw } from "react-native-expo-viewport-units";
import { navigate } from "../../services/Navigator";

export const PhotoThumbnail = (props: IPhoto) => {
  return (
    <TouchableOpacity onPress={() => navigate("PhotoDetailed", { props })}>
      <Image style={styles.image} source={{ uri: `${props.thumbnailUrl}` }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: vw(33.33),
    height: 150
  }
});
