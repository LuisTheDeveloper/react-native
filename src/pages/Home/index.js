import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Info from "./Info";
import Market from "./Market";

const HomeTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Info") {
            iconName = "info";
          } else if (route.name === "Market") {
            iconName = "shopping-cart";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      {/* <HomeTabs.Screen name="Market">
          {(props) => <Market productsList={data} />}
        </HomeTabs.Screen> */}
      <HomeTabs.Screen name="Market" component={Market} />
      <HomeTabs.Screen name="Info" component={Info} />
    </HomeTabs.Navigator>
  );
};

export default Home;
