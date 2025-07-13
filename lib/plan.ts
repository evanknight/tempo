export interface Workout {
  date: Date;
  title: string;
  distance: number;
  pace: string;
  description?: string;
}

export function generatePlan(startDate: Date, goalTime: string, difficulty: 'easy' | 'hard'): Workout[] {
  const weeks = 4; // minimal sample
  const plan: Workout[] = [];
  for (let w = 0; w < weeks; w++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + w * 7);
    plan.push({
      date,
      title: `Long Run Week ${w + 1}`,
      distance: difficulty === 'hard' ? 10 + w * 2 : 8 + w * 2,
      pace: 'easy',
      description: `Run at easy pace targeting marathon in ${goalTime}`
    });
  }
  return plan;
}
