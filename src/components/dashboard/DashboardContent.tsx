import React from 'react';
import PrimaryActions from './sections/PrimaryActions';
import MetricOverview from './sections/MetricOverview';
import ChartSection from './sections/ChartSection';
import ActivityTimeline from './cards/ActivityTimeline';
import QuickActions from './sections/QuickActions';

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <PrimaryActions />
      <MetricOverview />
      <ChartSection />
      <ActivityTimeline />
      <QuickActions />
    </div>
  );
};

export default DashboardContent;