import { generatePlan } from '../lib/plan';

test('generates 4 week plan', () => {
  const plan = generatePlan(new Date('2024-01-01'), '04:00', 'easy');
  expect(plan).toHaveLength(4);
});
