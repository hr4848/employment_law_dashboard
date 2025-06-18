import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const navigation = [
  { name: 'Dashboard', href: './documents/dashboard', current: true },
  { name: 'Drafts', href: './documents/drafts', current: false },
  { name: 'Glossary + FAQ', href: './documents/glossary', current: false },
  { name: 'Resources', href: './documents/resources', current: false },
]

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function DocumentsNavbar() {
  return (
    <Disclosure as="header" className="bg-white shadow-sm">
      <div className="w-full">
        {/* Desktop Top Row */}
        <div className="flex h-16 items-center justify-between pl-12">
          <div className="flex items-center space-x-16">
            <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
            <div className="hidden lg:flex lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pr-2">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </DisclosureButton>
          </div>
        </div>

        {/* Mobile Panel */}
        <DisclosurePanel className="lg:hidden">
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
            </div>
            <div className="mt-3 space-y-1 px-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
