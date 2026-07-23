import { StyleSheet } from 'react-native';

const theme1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
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
    fontWeight: '500',
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
    marginTop: 1,
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
    fontSize: 96,
    textAlign: 'center',
    marginVertical: 40,
    fontWeight: '200',
    fontFamily: 'Rotob',
    fontWeight: '200',
    letterSpacing: 2,
  },

  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 0,
  },

  resetButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2c753c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  startButtonActive: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3D1518',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleButtonTextReset: {
    color: '#999999',
    fontSize: 22,
    fontWeight: '500',
  },

  circleButtonTextResetActive: {
    color: '#eff8f6',
    fontSize: 22,
    fontWeight: '500',
  },

  circleButtonTextStart: {
    color: '#eff8f6',
    fontSize: 22,
    fontWeight: '500',
  },

  circleButtonTextStop: {
    color: '#ff6e67',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default theme1;