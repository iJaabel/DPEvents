import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Featured, Schedule, Tickets, Mine } from '../screens';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { StyText, StyIcon } from '../components';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StyIcon
        size={focused ? 24 : 32}
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? COLORS.white : COLORS.gray,
        }}
      />
    </View>
  );
};
const TabLabel = ({ focused, text }) => {
  return focused ? (
    <StyText
      h4
      style={{
        marginTop: -25,
        paddingBottom: 10,
      }}
    >
      {text}
    </StyText>
  ) : (
    <View />
  );
};

const Tabs = ({ params }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.tabBar,
          opacity: 0.9,
          borderTopColor: 'transparent',
          height: 111,
          borderRadius: SIZES.radius,
        },
      }}
    >
      <Tab.Screen
        name="Featured"
        component={Featured}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_1} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Featured" />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_2} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Schedule" />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Tickets" />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_4} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Mine" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
