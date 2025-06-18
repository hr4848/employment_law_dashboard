import React from 'react'

interface SidebarMenuItemProps {
  href: string;
  icon?: React.ReactElement;
  children?: React.ReactNode;
  minimized?: boolean;
}

export default function SidebarMenuItem({ children, href, icon }: SidebarMenuItemProps) {
  return (
<a href={href} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 font-sans rounded-md hover:bg-gray-10">
  {icon && <span className="icon">{icon}</span>}
  <span>{children}</span>
</a>


  )
}


// className=

// "flex items-center space-x-2 pl-4 pr-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 rounded-lg"