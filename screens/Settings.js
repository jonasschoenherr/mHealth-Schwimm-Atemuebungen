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
          <Text style={homeStyles.overviewTitle}>Einstellungen</Text>
          <Text style={homeStyles.overviewDate}>Personalisiere dein Training</Text>

          <View style={homeStyles.tabCardBox}>
            <Pressable style={homeStyles.settingItem} onPress={restartOnboarding}>
              <FontAwesome6 name="rotate-left" size={18} color="#DA8333" />
              <Text style={homeStyles.settingText}>Onboarding neu starten</Text>
              <FontAwesome6 name="chevron-right" size={14} color="#8E8E93" />
            </Pressable>

            <View style={homeStyles.settingDivider} />

            <View style={homeStyles.settingItem}>
              <FontAwesome6 name="bell" size={18} color="#64D2FF" />
              <Text style={homeStyles.settingText}>Tägliche Erinnerung (08:00 Uhr)</Text>
              <Text style={{ color: '#DA8333', fontWeight: '600' }}>An</Text>
            </View>

            <View style={homeStyles.settingDivider} />

            <View style={homeStyles.settingItem}>
              <FontAwesome6 name="circle-info" size={18} color="#30D158" />
              <Text style={homeStyles.settingText}>SwimBreath Version</Text>
              <Text style={{ color: '#8E8E93' }}>v1.2.0</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <BottomNavBar navigation={navigation} activeTab="Settings" />
    </View>
  );
};

export default Settings;