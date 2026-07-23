import React from 'react';
import theme1 from "../styles/theme1";
import { userFinishedOnboarding1 } from '../state/onboarding';

import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Button } from 'react-native';

const Onboarding1 = ({ navigation }) => {
  const styles = theme1;

  return (
    <View style={styles.container}>
      
      {/*  Welcome Title */}
      <Text style={[styles.title, { fontSize: 30 }]}>Welcome to SwimBreath</Text>

      {/* List of Benefits */}
      <View style={{ marginTop: -80, flex: 1, justifyContent: 'center', marginVertical: 20 }}>
        
        <View style={styles.item}>
          <View style={styles.image}>
            <FontAwesome6 name="user-doctor" size={26} color="#F5A623" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.heading}>No experience needed</Text>
            <Text style={styles.description}>
              The App provides all the essential medical knowledge.
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.image}>
            <FontAwesome6 name="heart-pulse" size={26} color="#F5A623" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Steady heartbeat</Text>
            <Text style={styles.description}>
              Train your breathing for calm and control in the water.
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.image}>
            <FontAwesome6 name="chart-line" size={26} color="#F5A623" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Track your progress</Text>
            <Text style={styles.description}>
              See your activities and improvements at a glance.
            </Text>
          </View>
        </View>

      </View>

      {/* Bottom Area */}
      <View style={{}}>
        
        {/* Dots indicator */}
        <View style={styles.dots}>
          <View style={styles.whiteDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Pressable 
          style={styles.button} 
          onPress={() => {
            userFinishedOnboarding1.set(true);
            navigation.navigate("/onboarding/page2", {
              animation: "slide_from_right"
            });
          }}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

export default Onboarding1;