import React from 'react';
import { Input } from 'antd';
import { Search, Sprout } from 'lucide-react';

const { Search: AntSearch } = Input;

const Header: React.FC = () => {
  return (
    <header className="h-[70px] bg-white border-b border-gray-200 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center">
        <Sprout className="h-8 w-8 text-lime-400 mr-2" />
        <span className="text-xl font-semibold text-gray-800">FundSpoke</span>
      </div>
      
      <div className="w-1/3">
        <AntSearch
          placeholder="Search companies, applications..."
          className="w-full"
          size="large"
          prefix={<Search className="text-gray-400" size={18} />}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      </div>
    </header>
  );
};

export default Header;