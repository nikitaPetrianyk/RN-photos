import React from "react";
import { Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { useRoute } from "@react-navigation/core";

export const PhotoDetailed = () => {
  const route = useRoute();
  const { url, title } = route.params.props;
  return (
    <SafeAreaView>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.image} source={{ uri: `${url}` }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    display: "flex",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  image: {
    width: vw(100),
    height: vh(100)
  }
});
