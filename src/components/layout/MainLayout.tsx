import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="ml-[240px] mt-[70px] bg-neutral-background">
          <main className="p-6">
            <div className="max-w-[1400px] mx-auto">
              {children}
            </div>
          </main>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;