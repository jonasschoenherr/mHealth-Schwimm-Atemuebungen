// import React from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   StatusBar 
// } from 'react-native';
// import homeStyles from '../styles/homeStyle';
// import BottomNavBar from '../elements/BottomNavBar';

// const Calendar = ({ navigation }) => {
//   return (
//     <View style={homeStyles.container}>
//       <StatusBar style="light" />

//       <View style={{ flex: 1, width: '100%' }}>
//         <ScrollView contentContainerStyle={{ paddingBottom: 110, paddingTop: 14 }}>
//           <Text style={homeStyles.overviewTitle}>Training calendar</Text>
//           <Text style={homeStyles.overviewDate}>The sessions you have completed</Text>

//           <View style={homeStyles.tabCardBox}>
//             <Text style={homeStyles.tabCardHeader}>Juni 2026</Text>
//             <View style={homeStyles.calendarGrid}>
//               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
//                 <Text key={i} style={homeStyles.calDayHeader}>{d}</Text>
//               ))}
//               {Array.from({ length: 29 }).map((_, i) => {
//                 const dayNum = i + 1;
//                 const isDone = [2, 5, 8, 10, 11, 12, 16, 20, 21, 22, 23, 24].includes(dayNum);
//                 return (
//                   <View key={i} style={[homeStyles.calCell, isDone && homeStyles.calCellDone]}>
//                     <Text style={[homeStyles.calCellText, isDone && { color: '#000', fontWeight: '700' }]}>
//                       {dayNum}
//                     </Text>
//                   </View>
//                 );
//               })}
//             </View>
//           </View>
//         </ScrollView>
//       </View>

//       <BottomNavBar navigation={navigation} activeTab="Calendar" />
//     </View>
//   );
// };

// export default Calendar;

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Pressable, 
  StatusBar
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import homeStyles from '../styles/homeStyle';
import calendarStyles from '../styles/calendarStyle';
import BottomNavBar from '../elements/BottomNavBar';
import { getCompletedWorkouts, toggleCompletedWorkout } from '../state/workouts';

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Helper to format date keys YYYY-MM-DD
const formatDateKey = (year, monthIndex, day) => {
  const m = String(monthIndex + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
};

// Calculate month details
const getMonthCalendarData = (year, monthIndex) => {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const jsFirstDay = new Date(year, monthIndex, 1).getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
  const startOffset = (jsFirstDay + 6) % 7; // Monday = 0, Sunday = 6
  return { daysInMonth, startOffset };
};

const Calendar = ({ navigation }) => {
  const styles = calendarStyles;

  const now = useMemo(() => new Date(), []);
  const currentYear = now.getFullYear();
  const currentMonthIndex = now.getMonth();
  const currentDay = now.getDate();
  const todayKey = useMemo(() => formatDateKey(currentYear, currentMonthIndex, currentDay), [currentYear, currentMonthIndex, currentDay]);

  const [completedDates, setCompletedDates] = useState([]);
  const [selectedDateKey, setSelectedDateKey] = useState(todayKey);
  const [selectedDateDetails, setSelectedDateDetails] = useState(null);

  const flatListRef = useRef(null);

  // Generate 37 months: 18 months before current month, current month, 18 months after
  const initialMonths = useMemo(() => {
    const list = [];
    for (let i = -18; i <= 18; i++) {
      const d = new Date(currentYear, currentMonthIndex + i, 1);
      const year = d.getFullYear();
      const month = d.getMonth();
      list.push({
        key: `${year}-${month}`,
        year,
        month,
        title: `${MONTH_NAMES[month]} ${year}`,
      });
    }
    return list;
  }, [currentYear, currentMonthIndex]);

  const [monthsData, setMonthsData] = useState(initialMonths);

  const todayMonthIndexInList = useMemo(() => {
    return monthsData.findIndex(
      m => m.year === currentYear && m.month === currentMonthIndex
    );
  }, [monthsData, currentYear, currentMonthIndex]);

  // Load completed workouts on mount and focus
  useEffect(() => {
    const loaded = getCompletedWorkouts();
    setCompletedDates(loaded);
  }, []);

  // Update selected details when selectedDateKey or completedDates change
  useEffect(() => {
    if (!selectedDateKey) return;
    const [yStr, mStr, dStr] = selectedDateKey.split('-');
    const year = parseInt(yStr, 10);
    const monthIndex = parseInt(mStr, 10) - 1;
    const day = parseInt(dStr, 10);
    const dateObj = new Date(year, monthIndex, day);
    const dayName = DAY_NAMES[dateObj.getDay()];
    const isCompleted = completedDates.includes(selectedDateKey);

    setSelectedDateDetails({
      key: selectedDateKey,
      formattedText: `${dayName}, ${MONTH_NAMES[monthIndex]} ${day}, ${year}`,
      isCompleted,
      isToday: selectedDateKey === todayKey,
    });
  }, [selectedDateKey, completedDates, todayKey]);

  // Toggle completion of a date
  const handleToggleCompletion = (dateKey) => {
    const updated = toggleCompletedWorkout(dateKey);
    setCompletedDates([...updated]);
  };

  // Scroll to today
  const scrollToToday = () => {
    const targetIdx = todayMonthIndexInList >= 0 ? todayMonthIndexInList : 18;
    setSelectedDateKey(todayKey);
    try {
      flatListRef.current?.scrollToIndex({ index: targetIdx, animated: true });
    } catch (e) {
      // Fallback
    }
  };

  // Infinite scroll handlers
  const handleEndReached = () => {
    setMonthsData(prev => {
      const last = prev[prev.length - 1];
      const newFuture = [];
      for (let i = 1; i <= 12; i++) {
        const d = new Date(last.year, last.month + i, 1);
        const year = d.getFullYear();
        const month = d.getMonth();
        newFuture.push({
          key: `${year}-${month}`,
          year,
          month,
          title: `${MONTH_NAMES[month]} ${year}`,
        });
      }
      return [...prev, ...newFuture];
    });
  };

  const renderMonthItem = useCallback(({ item }) => {
    const { year, month, title } = item;
    const { daysInMonth, startOffset } = getMonthCalendarData(year, month);

    const emptyOffsetCells = Array.from({ length: startOffset });
    const dayNumbers = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <View style={styles.monthCardContainer}>
        {/* Month Title */}
        <Text style={styles.monthHeaderTitle}>{title}</Text>

        {/* Month Grid */}
        <View style={styles.monthGridRow}>
          {/* Empty offset padding cells */}
          {emptyOffsetCells.map((_, i) => (
            <View key={`empty-${i}`} style={styles.dayCellContainer} />
          ))}

          {/* Day number cells */}
          {dayNumbers.map(day => {
            const dateKey = formatDateKey(year, month, day);
            const isToday = dateKey === todayKey;
            const isCompleted = completedDates.includes(dateKey);
            const isSelected = dateKey === selectedDateKey;

            return (
              <Pressable
                key={`day-${day}`}
                style={styles.dayCellContainer}
                onPress={() => setSelectedDateKey(dateKey)}
              >
                <View
                  style={[
                    styles.dayBadge,
                    isToday && styles.todayBadge,
                    isCompleted && !isToday && styles.completedBadge,
                    isSelected && !isToday && styles.selectedBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayNumberText,
                      isToday && styles.todayNumberText,
                      isCompleted && !isToday && styles.completedNumberText,
                      isSelected && !isToday && styles.selectedNumberText,
                    ]}
                  >
                    {day}
                  </Text>
                </View>

                {/* Workout Indicator Dot */}
                {isCompleted && (
                  <View
                    style={[
                      styles.completedDot,
                      isToday && styles.completedDotOnToday,
                    ]}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  }, [completedDates, selectedDateKey, todayKey, styles]);

  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />

      {/* Screen Header */}
      <View style={styles.topHeaderArea}>
        <View style={styles.headerTitleRow}>
          <View>
            <Text style={homeStyles.overviewTitle}>Training Calendar</Text>
            <Text style={homeStyles.overviewDate}>Your completed sessions</Text>
          </View>
        </View>

        {/* Pinned Weekday Names Bar (Apple Calendar style) */}
        <View style={styles.pinnedWeekdayBar}>
          {WEEKDAYS.map((day, idx) => (
            <Text key={idx} style={styles.weekdayHeaderLabel}>
              {day}
            </Text>
          ))}
        </View>
      </View>

      {/* Endless Vertical Calendar List */}
      <FlatList
        ref={flatListRef}
        data={monthsData}
        renderItem={renderMonthItem}
        keyExtractor={item => item.key}
        initialScrollIndex={todayMonthIndexInList >= 0 ? todayMonthIndexInList : 18}
        onScrollToIndexFailed={info => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: false,
            });
          }, 100);
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 170, paddingTop: 8 }}
        style={{ flex: 1, width: '100%' }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="Calendar" />
    </View>
  );
};

export default Calendar;