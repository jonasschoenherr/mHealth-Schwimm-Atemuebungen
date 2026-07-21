// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable } from 'react-native';
// import { FontAwesome6 } from '@expo/vector-icons';
// import { Button } from 'react-native';


// const theme1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1C1C1C',
//     paddingHorizontal: 25,
//     justifyContent: 'center',
//   },

//   title: {
//     color: 'white',
//     fontSize: 33,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: "center",
//   },

//   subtitle: {
//     color: '#aaa',
//     fontSize: 16,
//     marginBottom: 30,
//     textAlign: "center",
//   },

//   skipText: {
//     marginTop: 20,
//     color: "#000",
//     textAlign: "center",
//     fontSize: 14,
//     textDecorationLine: "underline",
//   },

//   item: {
//     flexDirection: 'row',
//     marginBottom: 30,
//   },

//   image: {
//     marginRight: 30,
//     marginTop: 8,
//     marginLeft: 25,
//   },

//   heading: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   description: {
//     color: '#B0B0B0',
//     marginTop: 4,
//   },

//   button: {
//     marginTop: 40,
//     backgroundColor: '#666',
//     padding: 16,
//     borderRadius: 12,
//   },

//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//   },

// //////// Screen 2
//   dots: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 25,
//   },

//   dot: {
//     width: 7,
//     height: 7,
//     borderRadius: 4,
//     backgroundColor: "#666",
//     marginHorizontal: 8,
//   },

//   whiteDot: {
//     width: 7,
//     height: 7,
//     borderRadius: 4,
//     backgroundColor: "white",
//     marginHorizontal: 8,
//   },

//   questionField: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#333",
//   },

//   questionLabel: {
//     color: "white",
//     fontSize: 16,
//   },

//   questionRight: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   questionValue: {
//     color: "#F5A623",
//     marginRight: 8,
//   },
// //////// Screen 3
//   timer: {
//     color: "white",
//     fontSize: 60,
//     textAlign: "center",
//     marginVertical: 50,
//     fontWeight: "300",
//   },

//   timerButtons: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginBottom: 40,
//   },

//   resetButton: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: "#555",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   startButton: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: "#28A745",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   circleButtonText: {
//     color: "white",
//     fontWeight: "600",
//   },

//   disabledButton: {
//     backgroundColor: "#444",
//     borderRadius: 12,
//     padding: 16,
//     marginTop: 30,
//   },

// });

// export default theme1;

import { StyleSheet } from 'react-native';

const theme1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 30,
  },

  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },

  backButtonText: {
    color: '#F5A623',
    fontSize: 18,
    fontWeight: '400',
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 0,
    textAlign: 'center',
    letterSpacing: -0.5,
    marginTop: 70
  },

  subtitle: {
    color: '#8E8E93',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 0,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  skipText: {
    marginTop: 18,
    color: '#F5A623',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 10,
  },

  image: {
    marginRight: 20,
    width: 32,
    alignItems: 'center',
  },

  heading: {
    color: 'white',
    fontSize: 17,
    fontStyle: 'bold',
    fontWeight: '800',
  },

  description: {
    color: '#8E8E93',
    fontSize: 16,
    marginTop: 4,
    lineHeight: 19,
    paddingRight: 10,
  },

  button: {
    backgroundColor: '#3A3A3C',
    paddingVertical: 20,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 60
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 36,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#3A3A3C',
    marginHorizontal: 5,
  },

  whiteDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },

  tableContainer: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    marginVertical: 10,
  },

  questionField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2C2C2E',
  },

  questionFieldLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  questionLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

  questionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  questionValue: {
    color: '#AEAEB2',
    fontSize: 16,
    marginRight: 4,
  },

  questionValueSelected: {
    color: '#F5A623',
    fontSize: 16,
    marginRight: 4,
    fontWeight: '500',
  },

  pickerModalOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#121214',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 20,
    zIndex: 100,
  },

  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13.5,
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#2C2C2E',
  },

  pickerHeaderButtonText: {
    color: '#F5A623',
    fontSize: 17,
    fontWeight: '600',
  },

  pickerHeaderTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },

  pickerWheelRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    position: 'relative',
  },

  pickerColumn: {
    flex: 1,
    height: '100%',
  },

  pickerItem: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pickerItemText: {
    color: '#8E8E93',
    fontSize: 18,
  },

  pickerItemTextSelected: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },

  pickerHighlight: {
    position: 'absolute',
    left: 15,
    right: 15,
    top: 78,
    height: 44,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    zIndex: -1,
  },

  timer: {
    color: 'white',
    fontSize: 72,
    textAlign: 'center',
    marginVertical: 40,
    fontWeight: '200',
    fontFamily: 'Courier',
    letterSpacing: 2,
  },

  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  resetButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1E3A24',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonActive: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3D1518',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleButtonTextReset: {
    color: '#AEAEB2',
    fontSize: 15,
    fontWeight: '600',
  },

  circleButtonTextStart: {
    color: '#30D158',
    fontSize: 15,
    fontWeight: '600',
  },

  circleButtonTextStop: {
    color: '#FF453A',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default theme1;