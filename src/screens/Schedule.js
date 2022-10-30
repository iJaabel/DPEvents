import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { dummyData, FONTS, SIZES, COLORS, icons, images } from "../constants";
import { StyText, StyIcon, StyAvatar } from "../components";
import axios from "axios";

// const eventbritePROFILE = `https://www.eventbriteapi.com/v3/users/me/`;
const eventbriteAPI = `https://www.eventbriteapi.com/v3/`;
const eventBriteSEARCH = `events/*/`;
const eventbriteAPIKEY = `?token=LDSAPP34HKZNFFZPGXZB`;

const Schedule = ({ params }) => {
  const [eventsList, setEvents] = useState([]);

  const _loadEventFromEventbrite = async () => {
    try {
      const events = await axios.get(`${eventbriteAPI + eventBriteSEARCH + eventbriteAPIKEY}`)
      console.log(`this is what is events: \n`, events)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    _loadEventFromEventbrite();
  }, []);

  return (
    <View style={styles.container}>
      <StyText style={{ color: "#fff", fontSize: 30 }}>Schedule</StyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Schedule;
