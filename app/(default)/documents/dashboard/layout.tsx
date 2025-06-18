import Sidebar from '@/components/ui/Sidebar/sidebar'
import Header from '@/components/ui/header'
import PaginationNumeric2 from '@/components/other/pagination-numeric-2'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <main className="grow [&>*:first-child]:scroll-mt-16">
          {children}

          {/* Pagination component added here */}
          <PaginationNumeric2 />
        </main>        

      </div>

    </div>
  )
}
