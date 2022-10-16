import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Card } from "@rneui/base";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { crops } from "../consts/data";

const HomeScreen = ({ navigation }) => {
  const [farm, setFarm] = useState({});

  const getFarm = async () => {
    try {
      let result = await SecureStore.getItemAsync("Farm");
      if (result) {
        result = JSON.parse(result);
        setFarm(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      getFarm();
    })();
  }, []);
  const CropCardItem = ({ item }) => {
    return (
      <View style={styles.cropCard}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Calendar", {
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
          <Text style={styles.croptitle}>{item.name} Crop #001</Text>
          <Text style={styles.croptitle2}>{item.name} Plant Day 1</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="green" />
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>FarmPal</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.searchInputContainer}>
            <AntDesign
              name="search1"
              size={25}
              style={{
                marginLeft: 20,
                color: "green",
              }}
            />
            <TextInput
              placeholder="Search for crops"
              style={{
                fontSize: 20,
                paddingLeft: 10,
                color: "gray",
                width: "100%",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.username}>Welcome, John Doe</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.view}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 50,
    width: "100%",
    margin: 0,
    borderWidth: 0,
    elevation: 0,
  },
  view: {
    marginTop: 100,
    justifyContent: "center",
  },
  cropCard: {
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
  croptitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  croptitle2: {
    color: "gray",
  },
  logo: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 25,
    color: "white",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 15,
    marginTop: 15,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#f1f1f1",
    marginTop: 25,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
