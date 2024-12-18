import React from 'react';
import { Layout } from 'antd';
import {
  BarChart3,
  Building2,
  FileText,
  FolderOpen,
  PlusCircle,
  Upload,
  Users,
} from 'lucide-react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import PlaceholderChart from './components/PlaceholderChart';
import QuickAction from './components/QuickAction';
import RecentActivity from './components/RecentActivity';

const { Content } = Layout;

function App() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header />
      
      <Content className="mt-[70px] p-6">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Applications"
              value="124"
              icon={<FileText size={24} />}
            />
            <MetricCard
              title="Active Companies"
              value="45"
              icon={<Building2 size={24} />}
            />
            <MetricCard
              title="Team Members"
              value="12"
              icon={<Users size={24} />}
            />
            <MetricCard
              title="Pending Claims"
              value="8"
              icon={<FolderOpen size={24} />}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PlaceholderChart title="Goal Completion" />
            <PlaceholderChart title="Monthly Performance" />
          </div>

          {/* Recent Activity */}
          <RecentActivity />

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickAction
              title="New Application"
              description="Start a new funding application"
              buttonText="Create Application"
              icon={<PlusCircle size={24} />}
            />
            <QuickAction
              title="Upload Documents"
              description="Add supporting documentation"
              buttonText="Upload Files"
              icon={<Upload size={24} />}
            />
            <QuickAction
              title="View Analytics"
              description="Check your performance metrics"
              buttonText="View Reports"
              icon={<BarChart3 size={24} />}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;