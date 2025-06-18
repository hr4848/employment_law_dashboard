'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface ContextProps {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
  sidebarExpanded: boolean
  setSidebarExpanded: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,
  sidebarExpanded: false,
  setSidebarExpanded: (): boolean => false
})

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {  
const [sidebarOpen, setSidebarOpen] = useState(true)
const [sidebarExpanded, setSidebarExpanded] = useState(true)

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = () => useContext(AppContext)