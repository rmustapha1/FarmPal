import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Formik } from "formik";
import Moment from "moment";
import * as SecureStore from "expo-secure-store";
const date = new Date();

const CreateFarm = ({ route, navigation }) => {
  const crop = route.params;

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleCreateFarm = (values, setSubmitting) => {
    setSubmitting(true);
    save("Farm", JSON.stringify(values));
    setSubmitting(false);
    alert("Farm created");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Formik
                initialValues={{
                  id: crop.id,
                  name: "",
                  date: date,
                  image: crop.image,
                  description: crop.description,
                }}
                onSubmit={(values, { setSubmitting }) =>
                  handleCreateFarm(values, setSubmitting)
                }
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  values,
                }) => (
                  <View style={styles.formView}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.formTitle}>Create a {crop.name}</Text>
                      <Text style={styles.formTitle}>Farm</Text>
                    </View>
                    <TextInput
                      placeholder="Enter Crop Label (eg. Maize Crop 101)"
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      style={styles.textInput}
                    />
                    <TextInput
                      onChangeText={handleChange("date")}
                      onBlur={handleBlur("date")}
                      value={Moment(date).format("DD-MM-YYYY")}
                      editable={false}
                      style={styles.textInput}
                    />
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        navigation.navigate("HomeScreen");
                      }}
                    >
                      <Text style={styles.btnText}>Continue</Text>
                      <Icon name="arrow-circle-right" size={25} color="white" />
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  formView: {
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    borderRadius: 20,
    padding: 15,
    marginTop: 50,
    elevation: 10,
  },
  titleContainer: {
    marginVertical: 15,
  },
  formTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
  textInput: {
    backgroundColor: "#f1f1f1",
    padding: 17,
    fontSize: 17,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "green",
    padding: 20,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    alignItems: "center",
  },
});

export default CreateFarm;
