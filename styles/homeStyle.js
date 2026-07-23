import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 44,
    position: 'relative',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  overviewTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  overviewDate: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  onboardingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E21',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2A2A2E',
  },
  onboardingPillText: {
    color: '#DA8333',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },

  /* SECTION 1: STATS GRID */
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#232326',
    borderRadius: 20,
    padding: 16,
  },
  statIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 2,
  },
  statLabel: {
    color: '#EBEBF5',
    fontSize: 15,
    fontWeight: '600',
  },
  statSubtext: {
    color: '#8E8E93',
    fontSize: 13,
    marginTop: 4,
  },

  /* RECENT EXERCISES BLOCK */
  recentContainer: {
    backgroundColor: '#252528',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  recentTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  recentCard: {
    width: 112,
    height: 112,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
  },
  recentCardHeader: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  recentCardSub: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 13,
    fontWeight: '600',
  },
  recentCardTag: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  recentCardTagText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
  },
  scrollTrackContainer: {
    width: '100%',
    height: 5,
    backgroundColor: '#353538',
    borderRadius: 2,
    marginTop: 6,
    overflow: 'hidden',
  },
  scrollTrackBar: {
    width: '55%',
    height: '100%',
    backgroundColor: '#b4afab',
    borderRadius: 2,
  },

  dividerLine: {
    height: 2,
    backgroundColor: '#2C2C2E',
    marginBottom: 20,
    marginHorizontal: 2
  },

  /* SECTION 2: START DAILY EXERCISE BUTTON */
  startDailyButton: {
    backgroundColor: '#DA8333',
    borderRadius: 35,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#e1ba9e',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  startDailyButtonText: {
    color: '#14100B',
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.1,
  },

  /* SECTION 3: INDIVIDUAL EXERCISES */
  sectionHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  featuredCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  showerIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(218, 131, 51, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DA8333',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  featuredTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  featuredDesc: {
    color: '#D1D1D6',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 14,
  },
  cardTagsRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 7,
  },
  metaPillText: {
    color: '#E5E5EA',
    fontSize: 15,
    fontWeight: '600',
  },

  /* TAB CONTENT STYLES */
  tabCardBox: {
    backgroundColor: '#232326',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    marginTop: 14,
  },
  tabCardHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  calDayHeader: {
    width: '12%',
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
  },
  calCell: {
    width: '12%',
    aspectRatio: 1,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calCellDone: {
    backgroundColor: '#DA8333',
  },
  calCellText: {
    color: '#E5E5EA',
    fontSize: 12,
  },

  /* CHART STYLES */
  barChartRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 140,
    paddingTop: 10,
  },
  barCol: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    width: 36,
  },
  barValText: {
    color: '#DA8333',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
  },
  barTrack: {
    width: 12,
    height: 90,
    backgroundColor: '#2C2C2E',
    borderRadius: 6,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    backgroundColor: '#DA8333',
    borderRadius: 6,
  },
  barLabel: {
    color: '#8E8E93',
    fontSize: 11,
    marginTop: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E21',
    padding: 12,
    borderRadius: 14,
  },

  /* SETTINGS STYLES */
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 12,
  },
  settingDivider: {
    height: 1,
    backgroundColor: '#2C2C2E',
  },

  /* FLOATING BOTTOM NAVBAR */
  bottomNavBar: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(28, 28, 32, 0.94)',
    borderRadius: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 0,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 35,
    minWidth: 64,
  },
  navItemActive: {
    backgroundColor: 'rgba(218, 131, 51, 0.22)',
  },
  navText: {
    color: '#8E8E93',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
  },
  navTextActive: {
    color: '#FFB366',
    fontWeight: '700',
  },
});

export default homeStyles;
