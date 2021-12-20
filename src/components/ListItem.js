import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  const { image } = item;

  return (
    <View style={styles.list}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
});

export default ListItem;
