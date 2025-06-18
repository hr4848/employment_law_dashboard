export default function SidebarSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3"
      aria-hidden="true"
    >
      {children}
    </h3>
  )
}
