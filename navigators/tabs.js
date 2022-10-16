import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  AntDesign as Icon,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CropsScreen from "../screens/CropsScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  const TabBarIcon = (props) => {
    return (
      <Icon
        name={props.name}
        size={props.size ? props.size : 25}
        color={props.tintColor}
      />
    );
  };
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={() => ({
        tabBarStyle: {
          alignItems: "center",
          position: "absolute",
          left: 0,
          bottom: 0,
          minHeight: 50,
          right: 0,
          color: "green",
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 15,
          fontWeight: "bold",
          position: "absolute",
          alignItems: "center",
          left: 0,
          bottom: 2,
          right: 0,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIconStyle: {
          marginBottom: 10,
          alignItems: "center",
        },
      })}
    >
      <Tab.Screen
        name="My Farm"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              focused={focused}
              color={focused ? "green" : "gray"}
              name={focused ? "forest" : "forest"}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="New Crop"
        component={CropsScreen}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name={Platform.OS == "ios" ? "arrow-back-ios" : "arrow-back"}
              size={28}
              color="white"
              style={{ marginLeft: 12 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              focused={focused}
              tintColor={color}
              name={focused ? "pluscircle" : "pluscircleo"}
              size={25}
            />
          ),
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Add New Crops",
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
    </Tab.Navigator>
  );
};

export default BottomTabs;
