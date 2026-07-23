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
          <Text style={homeStyles.overviewTitle}>Progress</Text>
          <Text style={homeStyles.overviewDate}>Your apnea development</Text>

          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>Breath-Hold Trend</Text>
            <View style={homeStyles.barChartRow}>
              {[
                { label: '-4W', val: 0, h: '0%' },
                { label: '-3W', val: 0, h: '0%' },
                { label: '-2W', val: 0, h: '0%' },
                { label: '-1W', val: 0, h: '0%' },
                { label: 'This Week', val: 4, h: '100%' },
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
            <Text style={homeStyles.tabCardHeader}>Achieved Milestones</Text>
            <View style={homeStyles.badgeRow}>
              <FontAwesome6 name="medal" size={24} color="#DA8333" />
              <View style={{ marginLeft: 14 }}>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>First Exercise</Text>
                <Text style={{ color: '#8E8E93', fontSize: 13 }}>Unlocked today</Text>
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