import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import homeStyles from '../styles/homeStyle';

const BottomNavBar = ({ navigation, activeTab }) => {
  return (
    <View style={homeStyles.bottomNavBar}>
      <Pressable 
        style={[homeStyles.navItem, activeTab === 'Home' && homeStyles.navItemActive]}
        onPress={() => {
            navigation.navigate("/home", {
            animation: "none"
            });
        }}
      >
        <FontAwesome6 
          name="house" 
          size={18} 
          color={activeTab === 'Home' ? '#DA8333' : '#8E8E93'} 
        />
        <Text style={[homeStyles.navText, activeTab === 'Home' && homeStyles.navTextActive]}>
          Home
        </Text>
      </Pressable>

      <Pressable 
        style={[homeStyles.navItem, activeTab === 'Calendar' && homeStyles.navItemActive]}
        onPress={() => {
            navigation.navigate("/calendar", {
            animation: "none"
            });
        }}
      >
        <FontAwesome6 
          name="calendar-days" 
          size={18} 
          color={activeTab === 'Calendar' ? '#DA8333' : '#8E8E93'} 
        />
        <Text style={[homeStyles.navText, activeTab === 'Calendar' && homeStyles.navTextActive]}>
          Calendar
        </Text>
      </Pressable>

      <Pressable 
        style={[homeStyles.navItem, activeTab === 'Progress' && homeStyles.navItemActive]}
        onPress={() => {
            navigation.navigate("/progress", {
            animation: "none"
            });
        }}
      >
        <FontAwesome6 
          name="chart-line" 
          size={18} 
          color={activeTab === 'Progress' ? '#DA8333' : '#8E8E93'} 
        />
        <Text style={[homeStyles.navText, activeTab === 'Progress' && homeStyles.navTextActive]}>
          Progress
        </Text>
      </Pressable>

      <Pressable 
        style={[homeStyles.navItem, activeTab === 'Settings' && homeStyles.navItemActive]}
        onPress={() => {
            navigation.navigate("/settings", {
            animation: "none"
            });
        }}
      >
        <FontAwesome6 
          name="gear" 
          size={18} 
          color={activeTab === 'Settings' ? '#DA8333' : '#8E8E93'} 
        />
        <Text style={[homeStyles.navText, activeTab === 'Settings' && homeStyles.navTextActive]}>
          Settings
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomNavBar;