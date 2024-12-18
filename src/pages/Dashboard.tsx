import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import DashboardContent from '../components/dashboard/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Dashboard" 
        breadcrumb={[{ label: 'Home' }, { label: 'Dashboard' }]} 
      />
      <DashboardContent />
    </MainLayout>
  );
};

export default Dashboard;