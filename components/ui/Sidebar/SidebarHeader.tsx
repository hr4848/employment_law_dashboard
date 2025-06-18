import Logo from '@/components/ui/logo'

export default function SidebarHeader({
  onCloseClick,
  sidebarExpanded,
}: {
  onCloseClick: () => void
  sidebarExpanded: boolean
}) {
  return (
    <div className="mb-10 flex h-8 justify-between pr-3 sm:px-2">
      {sidebarExpanded && <Logo />}
      <button
        onClick={onCloseClick}
        className="lg:hidden"
        aria-label="Close sidebar"
      >
        <span className="sr-only">Close sidebar</span>
        <svg
          className="h-6 w-6 fill-current text-slate-400"
          viewBox="0 0 24 24"
        >
          <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z" />
        </svg>
      </button>
    </div>
  )
}
