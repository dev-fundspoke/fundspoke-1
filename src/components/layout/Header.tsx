import React from 'react';
import { Layout, Input } from 'antd';
import { Search, Bell, Sprout } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';

const { Header: AntHeader } = Layout;
const { Search: AntSearch } = Input;

const Header: React.FC = () => {
  return (
    <AntHeader className="h-[70px] bg-primary border-b border-theme px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center">
        <Sprout className="h-8 w-8 text-primary mr-2" />
        <span className="text-xl font-semibold text-primary">FundSpoke</span>
      </div>
      
      <div className="w-1/3">
        <AntSearch
          placeholder="Search companies, applications..."
          className="w-full"
          size="large"
          prefix={<Search className="text-secondary" size={18} />}
        />
      </div>
      
      <div className="flex items-center space-x-6">
        <DarkModeToggle />
        <Bell className="text-primary cursor-pointer" size={20} />
        <div className="w-10 h-10 rounded-full bg-secondary"></div>
      </div>
    </AntHeader>
  );
};

export default Header;