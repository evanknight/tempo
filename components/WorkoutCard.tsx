import { Workout } from '../lib/plan';

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className="tw-border tw-p-2 tw-rounded">
      <div className="tw-font-semibold">{workout.title}</div>
      <div>{workout.distance} mi @ {workout.pace}</div>
    </div>
  );
}
