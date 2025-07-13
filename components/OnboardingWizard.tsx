import { useState } from 'react';

export default function OnboardingWizard({ onComplete }: { onComplete: (data: any) => void }) {
  const [raceDate, setRaceDate] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onComplete({ raceDate, goalTime, difficulty });
  }

  return (
    <form onSubmit={handleSubmit} className="tw-space-y-4">
      <div>
        <label className="tw-block">Race Date</label>
        <input type="date" value={raceDate} onChange={e => setRaceDate(e.target.value)} className="tw-border" />
      </div>
      <div>
        <label className="tw-block">Goal Time (hh:mm)</label>
        <input type="text" value={goalTime} onChange={e => setGoalTime(e.target.value)} className="tw-border" />
      </div>
      <div>
        <label className="tw-block">Difficulty</label>
        <select value={difficulty} onChange={e => setDifficulty(e.target.value as any)} className="tw-border">
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button type="submit" className="tw-bg-dark-primary tw-text-white tw-px-4 tw-py-2">Generate Plan</button>
    </form>
  );
}
