import React from 'react';
import { Switch } from 'antd';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren={<Moon size={14} className="text-white" />}
      unCheckedChildren={<Sun size={14} className="text-white" />}
      className={`hover:opacity-90 ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? '#4B5563' : '#A3E635'
      }}
    />
  );
};

export default DarkModeToggle;