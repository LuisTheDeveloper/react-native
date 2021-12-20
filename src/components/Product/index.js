import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { formatPrice } from "../../utils/funcAux";

const Product = ({ item }) => {
  return item.map((product, key) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.infoBar}>
          <View style={styles.leftColumn}>
            <Text numberOfLines={1} style={styles.text}>
              {product.name}
            </Text>
            <View style={styles.price}>
              <Text style={styles.text}>
                {formatPrice({
                  price: product.price,
                  discount: product.discount,
                  discountType: product.discount_type,
                })}
              </Text>
              {product.discount ? (
                <Text
                  style={[
                    styles.text,
                    { paddingLeft: 8, textDecorationLine: "line-through" },
                  ]}
                >
                  {formatPrice({
                    price: product.price,
                  })}
                </Text>
              ) : null}
            </View>
            <View style={styles.descriptionFlex}>
              <Text numberOfLines={1} style={styles.description}>
                {product.short_description}
              </Text>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <Image style={styles.avatar} source={{ uri: product.image }} />
          </View>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  avatar: {
    bottom: 65,
    borderRadius: 200,
    height: 24,
    left: 30,
    marginLeft: 8,
    width: 24,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    padding: 2,
  },
  description: {
    color: "#BDBDBD",
    fontFamily: "normal",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 14,
  },
  descriptionFlex: {
    alignSelf: "flex-start",
    flex: 6,
    flexDirection: "column",
  },
  image: {
    aspectRatio: 4 / 3,
    borderRadius: 8,
    flex: 1,
    height: 225,
    width: "100%",
  },
  infoBar: {
    backgroundColor: "#282828",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    opacity: 0.8,
    padding: 10,
    position: "absolute",
    top: 145,
    width: "100%",
  },
  leftColumn: {
    flex: 2,
    flexDirection: "column",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
  },
  price: {
    flex: 1,
    flexDirection: "row",
  },
  rightColumn: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "50%",
  },
  text: {
    color: "#ffffff",
    fontFamily: "normal",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
  },
});

export default Product;
