import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import homeStyles from '../styles/homeStyle';
import BottomNavBar from '../elements/BottomNavBar';

const Calendar = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />

      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 110, paddingTop: 10 }}>
          <Text style={homeStyles.overviewTitle}>Trainingskalender</Text>
          <Text style={homeStyles.overviewDate}>Deine absolvierten Einheiten</Text>

          <View style={homeStyles.tabCardBox}>
            <Text style={homeStyles.tabCardHeader}>Juni 2026</Text>
            <View style={homeStyles.calendarGrid}>
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d, i) => (
                <Text key={i} style={homeStyles.calDayHeader}>{d}</Text>
              ))}
              {Array.from({ length: 30 }).map((_, i) => {
                const dayNum = i + 1;
                const isDone = [2, 5, 8, 10, 11, 12, 15, 18, 21].includes(dayNum);
                return (
                  <View key={i} style={[homeStyles.calCell, isDone && homeStyles.calCellDone]}>
                    <Text style={[homeStyles.calCellText, isDone && { color: '#000', fontWeight: '700' }]}>
                      {dayNum}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>

      <BottomNavBar navigation={navigation} activeTab="Calendar" />
    </View>
  );
};

export default Calendar;
