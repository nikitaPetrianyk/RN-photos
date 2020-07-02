import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import { getData } from "../../services/QueriesApi";
import { IPhoto } from "../../models/Image";
import { PhotoThumbnail } from "../../components/PhotoThumbnail/PhotoThumbnail";
import { vw } from "react-native-expo-viewport-units";

export const PhotosGrid = () => {
  const [images, setImages] = useState<IPhoto[]>();
  const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false);
  useEffect(() => {
    getData().then(data => {
      setImages(data);
      setIsImagesLoaded(true);
    });
  }, []);
  if (!isImagesLoaded) {
    return (
      <View>
        <Text style={styles.loader}>Images is loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        numColumns={3}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <PhotoThumbnail {...(item = { ...item })} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "bisque",
    width: vw(100)
  },
  loader: {
    fontSize: 22,
    fontWeight: "bold"
  }
});
