import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
      {children}
    </main>
  </div>
);

export default Layout;