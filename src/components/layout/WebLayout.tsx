import { ReactNode } from 'react';
import WebSidebar from './WebSidebar';
import WebTopBar from './WebTopBar';

interface WebLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function WebLayout({ children, showSidebar = true }: WebLayoutProps) {
  if (!showSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <WebSidebar />
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <WebTopBar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
