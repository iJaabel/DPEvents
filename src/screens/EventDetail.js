/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
 *
 * TODO:
 * [X] Build the header image background section
 *    [X] Rendering the image background sub section (ImageBackground)
 *    [X] Rendering the header sub section
 *    [X] Rendering the footer sub section (LinearGradient)
 * [X] Build the buttons group section
 * [X] Build the description section
 * [X] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { dummyData, FONTS, SIZES, COLORS, icons, images } from "../constants";
import { StyText, StyIcon, StyAvatar } from "../components";

const EventDetail = ({ navigation, route, data }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    let { selectedEvent } = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  return (
    <View style={styles.container}>
      {console.log(selectedEvent)}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.black,
        }}
        style={{
          backgroundColor: COLORS.black,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          source={selectedEvent?.image}
          style={{
            width: "100%",
            height:
              SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <SectionImageHeader>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 56,
                  height: 40,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <StyIcon source={icons.back_arrow} size={24} />
              </TouchableOpacity>
              <View
                style={{
                  width: 96,
                  height: 40,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <StyIcon
                    source={icons.like}
                    size={24}
                    style={{
                      marginLeft: 16,
                      tinycolor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <StyIcon
                    source={icons.share}
                    size={24}
                    style={{
                      marginRight: 16,
                      tinycolor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </SectionImageHeader>
            <SectionImageFooter>
              <LinearGradient
                colors={["transparent", "#000"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: "100%",
                  height: 400,
                  justifyContent: "flex-end",
                }}
              >
                <FooterContentView>
                  <View>
                    <StyText
                      body4
                      style={{
                        opacity: 0.8,
                        letterSpacing: 2,
                      }}
                    >
                      {selectedEvent?.type}
                    </StyText>
                    <StyText h1>{selectedEvent?.title}</StyText>
                    <StyText body4 style={{ opacity: 0.8, letterSpacing: 1.5 }}>
                      STARTING AT{" "}
                      {moment(selectedEvent?.startingTime).format("hh:mm A")}
                    </StyText>
                  </View>
                  <LinearGradient
                    colors={COLORS.linear}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StyText body4 style={{ letterSpacing: 1 }}>
                      {moment(selectedEvent?.startingTime)
                        .format("MMM")
                        .toUpperCase()}
                    </StyText>
                    <StyText h2 style={{}}>
                      {moment(selectedEvent?.startingTime).format("DD")}
                    </StyText>
                  </LinearGradient>
                </FooterContentView>
              </LinearGradient>
            </SectionImageFooter>
          </View>
        </ImageBackground>
        {/*  */}
        <ButtonSection>
          <TouchableOpacity
            style={{
              width: 94,
              height: 32,
              borderRadius: 10,
              marginRight: 16,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyText h6 style={{ color: COLORS.black, letterSpacing: 1 }}>
              ABOUT
            </StyText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 124,
              height: 32,
              borderRadius: 10,
              backgroundColor: COLORS.input,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyText h6 style={{ opacity: 0.8, letterSpacing: 1 }}>
              PARTICIPANTS
            </StyText>
          </TouchableOpacity>
        </ButtonSection>
        <DescriptionSection>
          <StyText body3>{selectedEvent?.description}</StyText>
        </DescriptionSection>
        <LocationSection>
          <StyText h3>LOCATION</StyText>
          <View
            style={{
              height: 250,
            }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                height: 250,
                borderRadius: 30,
                marginTop: 20,
              }}
              minZoomLevel={15}
              initialRegion={dummyData.Region}
              customMapStyle={dummyData.MapStyle}
            ></MapView>
          </View>
          <View style={{ padding: 150 }} />
        </LocationSection>
        <BottomBarSection>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 30,
            }}
          >
            <View>
              <StyText body3 style={{ opacity: 0.8, letterSpacing: 1 }}>
                PRICE
              </StyText>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <StyText h2>$139.99</StyText>
                <StyText h3> per ticket</StyText>
              </View>
            </View>
            <TouchableOpacity>
              <LinearGradient
                colors={COLORS.linear}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 173,
                  height: 53,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyText h4>BUY TICKET</StyText>
                  <StyIcon
                    source={icons.buy_ticket}
                    size={24}
                    style={{ marginLeft: 11 }}
                  ></StyIcon>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BottomBarSection>
      </ScrollView>
    </View>
  );
};

const SectionImageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === "ios" ? "40px" : "20px"};
  margin-left: 30px;
  margin-right: 30px;
`;

const SectionImageFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  position: relative;
  z-index: -1;
`;

const FooterContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px;
`;

const ButtonSection = styled.View`
  margin: 15px 30px;
  flex-direction: row;
`;

const DescriptionSection = styled.View`
  margin: 0px 30px;
`;

const LocationSection = styled.View`
  margin: 25px 30px;
`;

const BottomBarSection = styled.View`
  height: 130px;
  width: ${SIZES.width + "px"};
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.tabBar};
  position: absolute;
  bottom: 0px;
  justify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default EventDetail;
