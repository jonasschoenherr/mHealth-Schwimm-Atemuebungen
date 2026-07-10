import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to SwimBreath</Text>

      <View style={styles.item}>
        <FontAwesome6 name="user-doctor" size={30} color="#F5A623" style={styles.image}/>
        <View>
          <Text style={styles.heading}>No experience needed</Text>
          <Text style={styles.description}>
            The app provides essential breathing guidance.
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <FontAwesome6 name="heart-pulse" size={30} color="#F5A623" style={styles.image}/>
        <View>
          <Text style={styles.heading}>Steady breath</Text>
          <Text style={styles.description}>
            Train your breathing before swimming.
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <FontAwesome6 name="chart-line" size={30} color="#F5A623" style={styles.image}/>
        <View>
          <Text style={styles.heading}>Track your progress</Text>
          <Text style={styles.description}>
            Monitor your improvement over time.
          </Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },

  item: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  icon: {
    fontSize: 28,
    marginRight: 15,
  },

  image: {
    marginRight: 20,
    marginTop: 8,
  },

  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    color: '#B0B0B0',
    marginTop: 4,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#666',
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});