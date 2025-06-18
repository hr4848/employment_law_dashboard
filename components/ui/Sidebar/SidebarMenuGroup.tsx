import { useState, useEffect } from 'react'

interface SidebarMenuGroupProps {
  children: (handleClick: () => void, openGroup: boolean) => React.ReactNode
  initiallyOpen?: boolean
  title: string
icon?: React.ReactNode
}

export default function SidebarMenuGroup({ title, initiallyOpen = false, children }: SidebarMenuGroupProps) {
  const [open, setOpen] = useState(initiallyOpen)

  const handleToggle = () => setOpen(!open)

  return (
    <li
      className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r group is-link-group ${
        open ? 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]' : ''
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer select-none text-gray-600 dark:text-gray-500"
        onClick={handleToggle}
      >
        <span className="text-sm font-medium">{title}</span>
        <svg
          className={`w-3 h-3 shrink-0 ml-2 fill-current text-gray-400 dark:text-gray-500 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 12 12"
        >
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
      <div className={`mt-1 ${open ? 'block' : 'hidden'}`}>{children(handleToggle, open)}</div>
    </li>
  )
}
