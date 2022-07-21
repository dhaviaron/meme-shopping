import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppProvider from "../contexts";

import ShoppingCart from "../pages/ShoppingCart";
import Home from "../pages/Home";

export type RootStackParamList = {
  ShoppingCart: undefined;

  Home: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="ShoppingCart" component={ShoppingCart} />
    </Navigator>
  );
};

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default AppStack;
