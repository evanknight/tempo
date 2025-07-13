import { Workout } from '../lib/plan';

export default function WorkoutModal({ workout, onClose }: { workout: Workout; onClose: () => void }) {
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-p-4 tw-rounded tw-space-y-2">
        <h2 className="tw-font-bold tw-text-xl">{workout.title}</h2>
        <p>{workout.description}</p>
        <button onClick={onClose} className="tw-bg-dark-primary tw-text-white tw-px-2 tw-py-1">Close</button>
      </div>
    </div>
  );
}
