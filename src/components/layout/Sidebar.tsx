import React from 'react';
import { Layout } from 'antd';
import {
  LayoutDashboard,
  Building2,
  FileText,
  BarChart3,
  Settings,
} from 'lucide-react';

const { Sider } = Layout;

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Building2, label: 'Companies' },
  { icon: FileText, label: 'Applications' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const Sidebar: React.FC = () => {
  return (
    <Sider
      width={240}
      className="fixed left-0 top-[70px] h-[calc(100vh-70px)] bg-primary border-r border-theme"
    >
      <nav className="py-6">
        {menuItems.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center px-6 py-3 text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
          >
            <Icon size={20} className="mr-3" />
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </Sider>
  );
};

export default Sidebar;