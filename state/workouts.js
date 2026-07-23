import PersistentStorage from "./PersistentStorage";

// ALL DAYS THAT ARE MARKED IN THE CALENDER
const DEFAULT_COMPLETED_DATES = [
  '2026-07-23',
  '2026-07-22',
  '2026-07-21',
  '2026-07-20',
  '2026-07-19',
  '2026-07-15',
  '2026-07-12',
  '2026-07-10',
  '2026-07-08',
  '2026-07-05',
  '2026-07-02',
  '2026-06-28',
  '2026-06-25',
  '2026-06-22',
  '2026-06-19',
  '2026-06-15',
  '2026-06-12',
  '2026-06-08',
  '2026-06-05',
  '2026-06-02'
];

export const completedWorkoutsStorage = new PersistentStorage("completed_workouts", DEFAULT_COMPLETED_DATES);

export const getCompletedWorkouts = () => {
  const data = completedWorkoutsStorage.get();
  if (!Array.isArray(data) || data.length === 0) {
    completedWorkoutsStorage.set(DEFAULT_COMPLETED_DATES);
    return DEFAULT_COMPLETED_DATES;
  }
  return data;
};

export const setCompletedWorkouts = (dates) => {
  completedWorkoutsStorage.set(dates);
};

export const addCompletedWorkout = (dateKey) => {
  const current = getCompletedWorkouts();
  if (!current.includes(dateKey)) {
    const updated = [...current, dateKey];
    setCompletedWorkouts(updated);
    return updated;
  }
  return current;
};

export const toggleCompletedWorkout = (dateKey) => {
  const current = getCompletedWorkouts();
  let updated;
  if (current.includes(dateKey)) {
    updated = current.filter(d => d !== dateKey);
  } else {
    updated = [...current, dateKey];
  }
  setCompletedWorkouts(updated);
  return updated;
};