'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navSections = [
  {
    title: 'Pack Contents',
    items: [
      {
        label: 'Pack Contents',
        path: '/stage-grievance/about-this-pack',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
    ],
  },
  {
    title: 'Step by Step',
    items: [
      {
        label: 'Task List',
        path: '/stage-grievance/grievance-tasks',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
    ],
  },
      {
    title: 'Resources',
    items: [
      {
        label: 'About this stage',
        path: '/stage-grievance/resources',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
      {
        label: 'Things to do before',
        path: '/stage-grievance/resources',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
      {
        label: 'References',
        path: '/stage-grievance/resources',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
    ],
  },
  {
    title: 'Documents',
    items: [
      {
        label: 'Summary',
        path: '/stage-grievance/documents',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
      {
        label: 'Formal Grievance',
        path: '/stage-grievance/documents',
        icon: placeholderIcon(), // TODO: Replace with proper icon
      },
    ],
  },
]

function placeholderIcon() {
  return (
    <svg
      className="shrink-0 fill-current mr-2 text-gray-400 dark:text-gray-500"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="6" />
    </svg>
  )
}

export default function PacksSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700/60 min-w-[15rem] md:space-y-3">
      {navSections.map((section) => (
        <div key={section.title}>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">
            {section.title}
          </div>
          <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
            {section.items.map((item) => (
              <li
                key={item.label}
                className="mr-0.5 md:mr-0 md:mb-0.5"
              >
                <Link
                  href={item.path}
                  className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${
                    pathname.includes(item.path)
                      ? 'bg-linear-to-r from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                      : ''
                  }`}
                >
                  {item.icon}
                  <span
                    className={`text-sm font-medium ${
                      pathname.includes(item.path)
                        ? 'text-violet-500 dark:text-violet-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
