import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import homeStyles from '../styles/homeStyle';
import BottomNavBar from '../elements/BottomNavBar';

const Progress = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />

      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 110, paddingTop: 10 }}>
          <Text style={homeStyles.overviewTitle}>Fortschritt</Text>
          <Text style={homeStyles.overviewDate}>Deine Apnoe-Entwicklung</Text>

          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>Atemhaltezeit Trend</Text>
            <View style={homeStyles.barChartRow}>
              {[
                { label: 'W1', val: 30, h: '40%' },
                { label: 'W2', val: 45, h: '55%' },
                { label: 'W3', val: 75, h: '75%' },
                { label: 'W4', val: 95, h: '90%' },
                { label: 'W5', val: 135, h: '100%' },
              ].map((bar, idx) => (
                <View key={idx} style={homeStyles.barCol}>
                  <Text style={homeStyles.barValText}>{bar.val}s</Text>
                  <View style={homeStyles.barTrack}>
                    <View style={[homeStyles.barFill, { height: bar.h }]} />
                  </View>
                  <Text style={homeStyles.barLabel}>{bar.label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>Erreichte Meilensteine</Text>
            <View style={homeStyles.badgeRow}>
              <FontAwesome6 name="medal" size={24} color="#DA8333" />
              <View style={{ marginLeft: 14 }}>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>1 Minute Apnoe</Text>
                <Text style={{ color: '#8E8E93', fontSize: 13 }}>Freigeschaltet vor 3 Tagen</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <BottomNavBar navigation={navigation} activeTab="Progress" />
    </View>
  );
};

export default Progress;