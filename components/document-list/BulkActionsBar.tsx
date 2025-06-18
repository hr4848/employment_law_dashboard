export default function BulkActionsBar() {
  return (
    <div className="absolute top-0 left-14 flex h-12 items-center space-x-3 bg-white sm:left-12 z-10">
      <button className="px-2 py-1 text-sm font-semibold text-gray-900 border ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Bulk edit
      </button>
      <button className="px-2 py-1 text-sm font-semibold text-gray-900 border ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Delete all
      </button>
    </div>
  )
}
