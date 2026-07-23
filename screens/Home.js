import React, { useState } from 'react';
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

const Home = ({ navigation }) => {
  const [recentScrollProgress, setRecentScrollProgress] = useState(0); // 0 to 1

  const restartOnboarding = () => {
    userFinishedStartScreen.set(false);
    userFinishedGeneralQuestionsScreen.set(false);
    userFinishedHoldBreathScreen.set(false);
    navigation.navigate('/onboarding/page1');
  };

  const startExercise = (name, duration) => {
    navigation.navigate('/breathing_exercise/running', { exerciseName: name, duration });
  };

  // Format date e.g. "Freitag, 12. Juni" or "Friday, June 12"
  const formattedDate = new Date().toLocaleDateString('en-En', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" />

      {/* Main Content Area */}
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 110, paddingTop: 10 }}
          style={{ flex: 1, width: '100%' }}
        >
          {/* Header: Overview + Date*/}
          <View style={homeStyles.headerRow}>
            <View>
              <Text style={homeStyles.overviewTitle}>Overview</Text>
              <Text style={homeStyles.overviewDate}>{formattedDate}</Text>
            </View>
          </View>

          {/* SECTION 1: STATS & RECENT EXERCISES */}

          {/* Top 2 Stats Grid (Side-by-side) */}
          <View style={homeStyles.statsGrid}>
            {/* Left Stat Box */}
            <View style={homeStyles.statBox}>
              <View style={homeStyles.statIconRow}>
                <FontAwesome6 name="fire-flame-curved" size={28} color="#DA8333" shadowColor="#DA8333" shadowOpacity={0.2} shadowRadius={3} />
              </View>
              <Text style={homeStyles.statNumber}>5 days</Text>
              <Text style={homeStyles.statLabel}>Current Streak</Text>
              <Text style={homeStyles.statSubtext}>Daily Goal 0%</Text>
            </View>

            {/* Right Stat Box */}
            <View style={homeStyles.statBox}>
              <View style={homeStyles.statIconRow}>
                <FontAwesome6 name="stopwatch" size={28} color="#64D2FF" shadowColor="#64D2FF" shadowOpacity={0.2} shadowRadius={3} />
              </View>
              <Text style={homeStyles.statNumber}>1:24 min</Text>
              <Text style={homeStyles.statLabel}>Longest Hold</Text>
              <Text style={homeStyles.statSubtext}>+8s this week</Text>
            </View>
          </View>

          {/* Middle Section: Recent Exercises (Verläufe) */}
          <View style={homeStyles.recentContainer}>
            <Text style={homeStyles.recentTitle}>Recent Exercises</Text>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={(e) => {
                const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
                const maxScroll = contentSize.width - layoutMeasurement.width;
                if (maxScroll > 0) {
                  const progress = Math.max(0, Math.min(1, contentOffset.x / maxScroll));
                  setRecentScrollProgress(progress);
                }
              }}
              contentContainerStyle={{ paddingRight: 10, gap: 12, paddingVertical: 4 }}
            >
              {/* Exercise Item 1 */}
              <Pressable 
                style={[homeStyles.recentCard, { backgroundColor: '#6B7F96' }]}
                onPress={() => startExercise('Box Breath', 180)}
              >
                <Text style={homeStyles.recentCardHeader}>Box Breath</Text>
                <Text style={homeStyles.recentCardSub}>3 min</Text>
                <View style={homeStyles.recentCardTag}>
                  <Text style={homeStyles.recentCardTagText}>yesterday</Text>
                </View>
              </Pressable>

              {/* Exercise Item 2 */}
              <Pressable 
                style={[homeStyles.recentCard, { backgroundColor: '#A18A35' }]}
                onPress={() => startExercise('CO2 Table', 300)}
              >
                <Text style={homeStyles.recentCardHeader}>CO2 Table</Text>
                <Text style={homeStyles.recentCardSub}>5 min</Text>
                <View style={homeStyles.recentCardTag}>
                  <Text style={homeStyles.recentCardTagText}>23. July</Text>
                </View>
              </Pressable>

              {/* Exercise Item 3 */}
              <Pressable 
                style={[homeStyles.recentCard, { backgroundColor: '#8B7462' }]}
                onPress={() => startExercise('Breath Walk', 240)}
              >
                <Text style={homeStyles.recentCardHeader}>Breath Walk</Text>
                <Text style={homeStyles.recentCardSub}>4 min</Text>
                <View style={homeStyles.recentCardTag}>
                  <Text style={homeStyles.recentCardTagText}>21. July</Text>
                </View>
              </Pressable>

              {/* Exercise Item 4 */}
              <Pressable 
                style={[homeStyles.recentCard, { backgroundColor: '#4E6E58' }]}
                onPress={() => startExercise('Tauchreflex Focus', 210)}
              >
                <Text style={homeStyles.recentCardHeader}>Diving reflex</Text>
                <Text style={homeStyles.recentCardSub}>3.5 Min</Text>
                <View style={homeStyles.recentCardTag}>
                  <Text style={homeStyles.recentCardTagText}>21. July</Text>
                </View>
              </Pressable>
            </ScrollView>

            {/* Functional Scroll Track Indicator Line */}
            <View style={homeStyles.scrollTrackContainer}>
              <View 
                style={[
                  homeStyles.scrollTrackBar, 
                  { marginLeft: `${recentScrollProgress * 45}%` }
                ]} 
              />
            </View>
          </View>

          {/* SECTION 2: START DAILY EXERCISE BUTTON */}

          <View style={homeStyles.dividerLine} />

          <Pressable 
            style={homeStyles.startDailyButton}
            onPress={() => startExercise('Tägliche Schwimmsession', 300)}
          >
            <Text style={homeStyles.startDailyButtonText}>Start Daily Exercise</Text>
          </Pressable>

          {/* SECTION 3: INDIVIDUAL EXERCISES */}

          {/* Exercise 1: Breath Walk */}
          <Pressable 
            style={[homeStyles.featuredCard, { backgroundColor: '#1D2B38' }]}
            onPress={() => startExercise('Apnoe Gehen (Atemhalten beim Gehen)', 240)}
          >

            <View style={homeStyles.featuredHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome6
                  name="person-walking"
                  size={28}
                  color="#64D2FF"
                  shadowColor="#64D2FF"
                  shadowOpacity={0.2}
                  shadowRadius={3}
                />

                <Text style={[homeStyles.featuredTitle, { marginLeft: 18, marginTop: 7 }]}>
                  Breath Walk
                </Text>
              </View>

              <View style={[homeStyles.topRightBadge, { backgroundColor: '#3A75A4' }]}>
                <FontAwesome6
                  name="play"
                  size={20}
                  color="#FFFFFF"
                  style={{ marginLeft: 2 }}
                />
              </View>
            </View>

            
            <Text style={homeStyles.featuredDesc}>
              Count your steps while holding your breath as you exhale. Build up your CO2 tolerance through continuous movement.
            </Text>

            <View style={homeStyles.cardTagsRow}>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="person-running" size={11} color="#64D2FF" />
                <Text style={homeStyles.metaPillText}>Dynamic</Text>
              </View>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="clock" size={11} color="#64D2FF" />
                <Text style={homeStyles.metaPillText}>4 min</Text>
              </View>
            </View>
          </Pressable>

          {/* Exercise 2: CO2-Toleranz */}
          <Pressable 
            style={[homeStyles.featuredCard, { backgroundColor: '#203222' }]}
            onPress={() => startExercise('CO2-Toleranz Tabelle', 300)}
          >

            <View style={homeStyles.featuredHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome6
                  name="heart-pulse"
                  size={28}
                  color="#30D158"
                  shadowColor="#30D158"
                  shadowOpacity={0.2}
                  shadowRadius={3}
                />

                <Text style={[homeStyles.featuredTitle, { marginLeft: 18, marginTop: 7 }]}>
                  CO₂ tolerance
                </Text>
              </View>

              <View style={[homeStyles.topRightBadge, { backgroundColor: '#388342' }]}>
                <FontAwesome6
                  name="play"
                  size={20}
                  color="#FFFFFF"
                  style={{ marginLeft: 2 }}
                />
              </View>
            </View>


            <Text style={homeStyles.featuredDesc}>
              Shorter rest periods with a fixed breath-hold duration to specifically raise the stimulus threshold.
            </Text>

            <View style={homeStyles.cardTagsRow}>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="lungs" size={11} color="#30D158" />
                <Text style={homeStyles.metaPillText}>Lung capacity</Text>
              </View>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="clock" size={11} color="#30D158" />
                <Text style={homeStyles.metaPillText}>5 min</Text>
              </View>
            </View>
          </Pressable>

          {/* Exercise 3: Shower exercise */}
          <Pressable 
            style={[homeStyles.featuredCard, { backgroundColor: '#3E291C' }]}
            onPress={() => startExercise('Shower exercise', 180)}
          >

            <View style={homeStyles.featuredHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome6
                  name="shower"
                  size={28}
                  color="#DA8333"
                  shadowColor="#DA8333"
                  shadowOpacity={0.2}
                  shadowRadius={3}
                />

                <Text style={[homeStyles.featuredTitle, { marginLeft: 18, marginTop: 7 }]}>
                  Shower exercise
                </Text>
              </View>

              <View style={[homeStyles.topRightBadge, { backgroundColor: '#DA8333' }]}>
                <FontAwesome6
                  name="play"
                  size={20}
                  color="#FFFFFF"
                  style={{ marginLeft: 2 }}
                />
              </View>
            </View>


            <Text style={homeStyles.featuredDesc}>
              Irgendwelche Informationen zu der Shower Übung.
            </Text>

            <View style={homeStyles.cardTagsRow}>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="droplet" size={11} color="#DA8333" />
                <Text style={homeStyles.metaPillText}>Cold water</Text>
              </View>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="clock" size={11} color="#DA8333" />
                <Text style={homeStyles.metaPillText}>3 min</Text>
              </View>
              <View style={homeStyles.metaPill}>
                <FontAwesome6 name="bullseye" size={11} color="#DA8333" />
                <Text style={homeStyles.metaPillText}>Diving reflex</Text>
              </View>
            </View>
          </Pressable>

        </ScrollView>
      </View>

      <BottomNavBar navigation={navigation} activeTab="Home" />
    </View>
  );
};

export default Home;