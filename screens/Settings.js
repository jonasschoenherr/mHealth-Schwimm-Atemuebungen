import React from 'react';
import { 
  View, 
  Text, 
  Pressable, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import homeStyles from '../styles/homeStyle';
import BottomNavBar from '../elements/BottomNavBar';
import { 
  userFinishedOnboarding1, 
  userFinishedOnboarding2, 
  userFinishedOnboarding3 
} from '../state/onboarding';

const Settings = ({ navigation }) => {
  const restartOnboarding = () => {
    userFinishedOnboarding1.set(false);
    userFinishedOnboarding2.set(false);
    userFinishedOnboarding3.set(false);
    navigation.navigate('/onboarding/page1');
  };

  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />

      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 110, paddingTop: 10 }}>
          <Text style={homeStyles.overviewTitle}>Settings</Text>
          <Text style={homeStyles.overviewDate}>Personalize your training & preferences</Text>

          {/* SECTION 1: Health & Personalization */}
          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>Profile & Health Data</Text>

            <Pressable style={homeStyles.settingItem}>
              <FontAwesome6 name="heart-pulse" size={18} color="#DA8333" />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '600' }}>
                  Health Information
                </Text>
                <Text style={{ color: '#8E8E93', fontSize: 12, marginTop: 2 }}>
                  Age, fitness level & training goals
                </Text>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#8E8E93" />
            </Pressable>

            <View style={homeStyles.settingDivider} />

            <Pressable style={homeStyles.settingItem}>
              <FontAwesome6 name="ruler-combined" size={18} color="#FF9F0A" />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '600' }}>
                  Units of Measurement
                </Text>
                <Text style={{ color: '#8E8E93', fontSize: 12, marginTop: 2 }}>
                  Metric (meters, seconds, °C)
                </Text>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#8E8E93" />
            </Pressable>
          </View>

          {/* SECTION 2: App Preferences */}
          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>App Preferences</Text>

            <View style={homeStyles.settingItem}>
              <FontAwesome6 name="bell" size={18} color="#64D2FF" />
              <Text style={homeStyles.settingText}>Daily Reminder (08:00 AM)</Text>
              <Text style={{ color: '#DA8333', fontWeight: '700' }}>On</Text>
            </View>

            <View style={homeStyles.settingDivider} />

            <Pressable style={homeStyles.settingItem} onPress={restartOnboarding}>
              <FontAwesome6 name="rotate-left" size={18} color="#FF453A" />
              <Text style={homeStyles.settingText}>Restart Onboarding</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#8E8E93" />
            </Pressable>
          </View>

          {/* SECTION 3: System Info */}
          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>About</Text>

            <View style={homeStyles.settingItem}>
              <FontAwesome6 name="circle-info" size={18} color="#30D158" />
              <Text style={homeStyles.settingText}>SwimBreath Version</Text>
              <Text style={{ color: '#8E8E93', fontWeight: '600' }}>v1.2.0</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <BottomNavBar navigation={navigation} activeTab="Settings" />
    </View>
  );
};

export default Settings;