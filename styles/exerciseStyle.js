import { StyleSheet } from 'react-native';

const exerciseStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },

  quitButton: {
    alignSelf: 'flex-start',
    marginBottom: 25,
  },

  quitText: {
    color: '#DA8333',
    fontSize: 16,
    fontWeight: '500',
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  timer: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 50,
  },

  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  outerCircle: {
    width: 130,
    height: 130,
    borderRadius: 110,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DA8333',
    position: 'absolute',
  },

  phase: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '600',
    marginTop: 40,
  },

  progress: {
    color: '#A5A5A5',
    fontSize: 18,
    marginTop: 10,
  },

  bottomButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginTop: 60,
  },

  secondaryButton: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 15,
    width: '46%',
    borderRadius: 28,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },

  subtitle: {
    color: '#BBBBBB',
    fontSize: 18,
    marginBottom: 35,
  },

  instructions: {
    width: '100%',
    marginBottom: 40,
  },

  instruction: {
    color: 'white',
    fontSize: 18,
    marginBottom: 18,
    lineHeight: 28,
  },

  footer: {
    color: '#A5A5A5',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  startButton: {
    width: '100%',
    backgroundColor: '#DA8333',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 60
  },

  startButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },

  finishedCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#DA8333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 55,
    fontWeight: '700',
  },

  finishedContainer: {
    justifyContent: 'center',
    paddingBottom: 40,
  },

  finishedCircleContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default exerciseStyles;