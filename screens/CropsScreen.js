import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Card } from "@rneui/base";
import { crops } from "../consts/data";

const { width } = Dimensions.get("window");
const CropsScreen = ({ navigation }) => {
  const CropCardItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("CropDetails", {
              name: item.name,
              description: item.description,
              image: item.icon,
              id: item.id,
            });
          }}
        >
          <Image
            resizeMode="contain"
            source={item.icon}
            style={styles.cropIcon}
          />
          <Text style={{ color: "black" }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>What are you planting</Text>
          <Text style={styles.header}>today ?</Text>
        </View>
        <View style={styles.searchInputContainer}>
          <AntDesign
            name="search1"
            size={25}
            style={{
              marginLeft: 20,
              color: "green",
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Search for crops..."
          />
        </View>
        <FlatList
          data={crops}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginHorizontal: 12,
          }}
          renderItem={({ item }) => <CropCardItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginLeft: 15,
  },
  card: {
    width: "48%",
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  cropIcon: {
    width: 100,
    height: 100,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#f1f1f1",
    marginTop: 25,
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    marginLeft: 10,
    padding: 5,
    fontSize: 20,
  },
});

export default CropsScreen;
