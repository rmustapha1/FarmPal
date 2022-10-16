import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CropsScreen from "../screens/CropsScreen";
import BottomTabs from "./tabs";
import CropDetailScreen from "../screens/CropDetailScreen";
import CreateFarm from "../screens/CreateFarm";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Crops"
          component={CropsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CropDetails"
          component={CropDetailScreen}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: "Crop Details",
            headerTintColor: "white",
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: "green",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="CreateFarm"
          component={CreateFarm}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: "Create a Farm",
            headerTintColor: "white",
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: "green",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
