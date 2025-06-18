// app/documents/layout.tsx

import DocumentsNavbar from './documents-navbar';

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return (

    
    <div 
    className="flex flex-col h-full">
      <DocumentsNavbar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>

    </div>
  );
}
