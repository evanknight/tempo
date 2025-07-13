import { useEffect, useState } from 'react';
import { generatePlan, Workout } from '../lib/plan';
import WorkoutCard from './WorkoutCard';

export default function Dashboard({ startDate, goalTime, difficulty }: { startDate: string; goalTime: string; difficulty: 'easy' | 'hard'; }) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const d = generatePlan(new Date(startDate), goalTime, difficulty);
    setWorkouts(d);
  }, [startDate, goalTime, difficulty]);

  return (
    <div className="tw-space-y-2">
      {workouts.map(w => <WorkoutCard key={w.date.toISOString()} workout={w} />)}
    </div>
  );
}
