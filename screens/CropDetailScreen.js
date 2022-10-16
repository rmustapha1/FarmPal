import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, FontAwesome as Icon } from "@expo/vector-icons";

const CropDetailScreen = ({ route, navigation }) => {
  const crop = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={crop.image} resizeMode="contain" style={styles.image} />
        <View style={styles.detailsView}>
          <Text style={styles.cropName}>Overview</Text>
          <Text style={styles.description}>{crop.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <Text style={styles.cropName}>{crop.name}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("CreateFarm", crop);
          }}
        >
          <Text style={styles.btnText}>Start a Farm</Text>
          <Icon name="arrow-circle-right" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
    borderWidth: 2,
  },
  detailsView: {
    backgroundColor: "whitesmoke",
    flex: 1,
  },
  cropName: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginVertical: 15,
    marginLeft: 15,
  },
  description: {
    fontSize: 17,
    color: "gray",
    letterSpacing: 0.7,
    lineHeight: 32,
    marginVertical: 15,
    marginLeft: 15,
  },
  buttonView: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "green",
    padding: 15,
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default CropDetailScreen;
