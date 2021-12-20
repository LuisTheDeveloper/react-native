import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchProducts from "../../fetch";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  SectionList,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import Product from "../../components/Product";

const Market = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.verticalList}>
          <ScrollView>
            {data.map((item) => (
              <View>
                <Text>{item.category}</Text>
                <View style={styles.HorizontalList}>
                  <FlatList
                    horizontal
                    data={data.filter(
                      (element) => element.category === item.category
                    )}
                    renderItem={({ item }) => <Product item={item.data} />}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  verticalList: {
    flexDirection: "column",
  },
  HorizontalList: {
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 150,
  },
});

{
  /* {productsList.map((product, key) => {
        return <Text>{product.category}</Text>;
      })} */
}
{
  /* <SectionList
        keyExtractor={(item) => item.id}
        sections={productsList}
        renderItem={({ item }) => <Text>{item.short_description}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.category}</Text>}
      /> */
}

export default Market;
