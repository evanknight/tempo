import { useState } from 'react';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  const [params] = useState({ startDate: new Date().toISOString(), goalTime: '04:00', difficulty: 'easy' as const });

  return <Dashboard startDate={params.startDate} goalTime={params.goalTime} difficulty={params.difficulty} />;
}
