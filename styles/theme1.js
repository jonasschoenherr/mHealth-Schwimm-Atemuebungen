import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Button } from 'react-native';


const theme1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: "center",
  },

  subtitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },

  skipText: {
    marginTop: 20,
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },

  item: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  image: {
    marginRight: 30,
    marginTop: 8,
    marginLeft: 25,
  },

  heading: {
    color: 'white',
    fontSize: 20,
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

//////// Screen 2
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#666",
    marginHorizontal: 8,
  },

  whiteDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 8,
  },

  questionField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  questionLabel: {
    color: "white",
    fontSize: 16,
  },

  questionRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  questionValue: {
    color: "#F5A623",
    marginRight: 8,
  },
//////// Screen 3
  timer: {
    color: "white",
    fontSize: 60,
    textAlign: "center",
    marginVertical: 50,
    fontWeight: "300",
  },

  timerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },

  resetButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
  },

  startButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#28A745",
    justifyContent: "center",
    alignItems: "center",
  },

  circleButtonText: {
    color: "white",
    fontWeight: "600",
  },

  disabledButton: {
    backgroundColor: "#444",
    borderRadius: 12,
    padding: 16,
    marginTop: 30,
  },

});

export default theme1;
