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

export default theme1;
