import { useState } from 'react';
import OnboardingWizard from '../components/OnboardingWizard';
import Dashboard from '../components/Dashboard';

export default function Onboard() {
  const [data, setData] = useState<any>();

  if (!data) {
    return <OnboardingWizard onComplete={setData} />;
  }

  return <Dashboard startDate={data.raceDate} goalTime={data.goalTime} difficulty={data.difficulty} />;
}
