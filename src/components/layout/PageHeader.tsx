import React from 'react';
import { Breadcrumb } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

interface PageHeaderProps {
  title: string;
  breadcrumb?: { label: string; path?: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb = [] }) => {
  const items: ItemType[] = breadcrumb.map((item) => ({
    title: item.path ? <a href={item.path}>{item.label}</a> : item.label,
  }));

  return (
    <div className="mb-6">
      <Breadcrumb items={items} className="mb-2" />
      <h1 className="text-2xl font-semibold text-neutral-text">{title}</h1>
    </div>
  );
};

export default PageHeader;