/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 *
 * TODO:
 * [X] Build the header section
 * [X] Build the search section (TextInput)
 * [X] Build the FEATURED section (Flatlist)
 * [X] Build the FOR YOU section
 */
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { dummyData, FONTS, SIZES, COLORS, icons, images } from "../constants";
import { StyText, StyIcon, StyAvatar } from "../components";

const Featured = ({ navigation }) => {
  useEffect(()=>{
    return () => {
      //removes "onAnimatedValueUpdate" with no listeners registered warning
      this._translateX.stopAnimation(() => {
        requestAnimationFrame(() => {
            this._translateX.removeAllListeners();
        })
    });
    }
  },[])
  const _renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("EventDetail", { selectedEvent: item });
      }}
    >
      <View
        style={{
          marginLeft: index === 0 ? 30 : 20,
          marginRight: index === dummyData.Events.length - 1 ? 30 : 0,
        }}
      >
        <ImageBackground
          source={item.image}
          borderRadius={SIZES.radius}
          style={{
            width: SIZES.width / 2 + 70,
            height: SIZES.width / 2 + 70,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              marginHorizontal: 15,
              marginVertical: 15,
            }}
          >
            <DateBox
              style={{
                opacity: 0.7,
                letterSpacing: 2,
              }}
            >
              <StyText body5 color={COLORS.black}>
                {moment(item.startingTime).format("MMM").toUpperCase()}
              </StyText>
              <StyText body5 color={COLORS.black}>
                {moment(item.startingTime).format("DD")}
              </StyText>
            </DateBox>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 25,
            }}
          >
            <StyText body5 style={{ opacity: 0.7 }}>
              {item.type}
            </StyText>
            <StyText h2>{item.title}</StyText>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeader>
        <View>
          <StyText body style={{ opacity: 0.8 }}>
            Today's date placeholder
          </StyText>
          <StyText h1>Explore events</StyText>
        </View>
        {/*  */}
        <TouchableOpacity
          delayPressOut={100}
          onPress={() => {
            // navigation.navigate("");
            console.warn("I was pressed");
          }}
        >
          <StyAvatar source={images.avatar} />
        </TouchableOpacity>
      </SectionHeader>
      <SectionSearch>
        <SectionView>
          <StyIcon source={icons.search} size={24} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.gray1}
            style={{
              ...FONTS.h4,
              color: COLORS.white,
              width: 250,
            }}
          ></TextInput>
          <StyIcon source={icons.filter} size={24} />
        </SectionView>
      </SectionSearch>
      <SectionTitle>
        <StyText h5>FEATURED EVENTS</StyText>
      </SectionTitle>
      <View>
        <FlatList
          horizontal
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => "event_" + item.id}
          data={dummyData.Events}
          renderItem={_renderItem}
        ></FlatList>
      </View>
      <SectionTitle>
        <StyText h5>OFFERS</StyText>
      </SectionTitle>
      <LinearGradient
        colors={COLORS.linear}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: 120,
          marginHorizontal: 30,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GiftBox>
            <StyIcon source={icons.gift} size={24} />
          </GiftBox>
          <View style={{ marginLeft: 22 }}>
            <StyText h3>Claim 1 free ticket</StyText>
            <StyText body4 style={{ width: 180 }}>
              Share an event to a friend and claim a free ticket
            </StyText>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
  padding: 16px ${SIZES.padding};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SectionSearch = styled.View`
  margin: 4px ${SIZES.padding};
  height: 50px;
  background-color: ${COLORS.input};
  border-radius: 15px;
  justify-content: center;
`;

const SectionView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 9px;
  margin-right: 15px;
`;
const SectionTitle = styled.View`
  margin: 20px ${SIZES.padding};
`;
const DateBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
`;



const GiftBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
