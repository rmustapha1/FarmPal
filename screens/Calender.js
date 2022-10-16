// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";

//import EventCalendar component
import EventCalendar from "react-native-events-calendar";

//get the size of device
let { width } = Dimensions.get("window");

const CalenderScreen = ({ route, navigation }) => {
  const crop = route.params;
  const [events, setEvents] = useState([
    {
      start: "2022-10-16",
      end: "2020-10-16",
      title: "Planting & Watering",
      summary: "Planting",
    },
    {
      start: "2022-10-27",
      end: "2022-11-01",
      title: "Haversting",
      summary: "Havest Crop",
    },
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          //Function on event press
          events={events}
          frequency="monthly"
          color="green"
          //passing the Array of event
          width={width}
          scrollToFirst
          //scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CalenderScreen;
