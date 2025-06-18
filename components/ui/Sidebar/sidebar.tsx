'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAppProvider } from '@/app/app-provider'
import { LeftArrowIcon, RightArrowIcon } from './icons'

import Logo from '@/components/ui/logo'
import SidebarSectionTitle from '@/components/ui/Sidebar/SidebarSectionTitle'
import SidebarMenuGroup from '@/components/ui/Sidebar/SidebarMenuGroup'
import SidebarMenuItem from '@/components/ui/Sidebar/SidebarMenuItem'
import SidebarHeader from '@/components/ui/Sidebar/SidebarHeader'

import {
  DashboardIcon,
  GrievanceIcon,
  TasksIcon,
  DocumentsIcon,
  AcasIcon,
  TribunalClaimIcon,
  CaseManagementIcon,
  PreHearingIcon,
  FinalHearingIcon,
  PostHearingIcon,
  SettingsIcon,
} from '@/components/ui/Sidebar/icons';

export default function Sidebar() {
  const pathname = usePathname()
  const trigger = useRef<HTMLButtonElement | null>(null)
  const sidebar = useRef<HTMLDivElement | null>(null)

  const {
    sidebarOpen = true,
    setSidebarOpen,
    sidebarExpanded = true,
    setSidebarExpanded
  } = useAppProvider()

  const [sidebarWidth, setSidebarWidth] = useState(288) // Default width (w-72)
  const [isHovered, setIsHovered] = useState(false)

  // Apply .sidebar-expanded class on body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sidebarExpanded) {
        document.body.classList.add('sidebar-expanded')
      } else {
        document.body.classList.remove('sidebar-expanded')
      }
    }
  }, [sidebarExpanded])

  // Handle outside click
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebarExpanded ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      ) {
        return
      }
      setSidebarOpen(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [sidebarOpen, sidebarExpanded])

  // Handle ESC key
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== 'Escape') return
      setSidebarOpen(false)
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [sidebarOpen])

  // Toggle sidebar expanded/minimized
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }
return (
  <>
    {/* Sidebar */}
    <div
      id="sidebar"
      ref={sidebar}
      style={{ width: sidebarExpanded ? sidebarWidth : 68 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 z-40 h-screen overflow-y-scroll no-scrollbar border-r border-slate-200 bg-white p-4 transition-all duration-300 
                  ease-in-out dark:border-slate-800 dark:bg-slate-900 lg:z-auto lg:static lg:left-auto lg:top-auto lg:translate-x-0 ${
        sidebarOpen || sidebarExpanded ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      {/* Sidebar header */}
      <SidebarHeader
        sidebarExpanded={sidebarExpanded}
        onCloseClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Minimization Toggle Button */}
      {(isHovered || !sidebarExpanded) && (
        <button
          onClick={toggleSidebar}
          aria-label={sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          className="
            absolute top-0 left-full -ml-7 mt-2 p-1 rounded bg-slate-200 text-slate-600
            hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
          "
          type="button"
        >
          {sidebarExpanded ? (
            <LeftArrowIcon className="w-5 h-5" />
          ) : (
            <RightArrowIcon className="w-5 h-5" />
          )}
        </button>
      )}


        {/* Menu content */}
        <nav className="space-y-6">
          {/* Dashboard Section */}
          <SidebarSectionTitle>{sidebarExpanded ? 'Dashboard' : ''}</SidebarSectionTitle>
          <ul className="mt-3">
            <SidebarMenuItem href="/dashboard" icon={<DashboardIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Dashboard Home'}
            </SidebarMenuItem>
          </ul>

          {/* Stages Section */}
          <SidebarSectionTitle>{sidebarExpanded ? 'Stages' : ''}</SidebarSectionTitle>
          <ul className="mt-3">
            <SidebarMenuItem href="/stage-grievance/grievance-tasks" icon={<TasksIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Grievance'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/acas" icon={<AcasIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'ACAS Early Resolution'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/tribunal-claim" icon={<TribunalClaimIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Tribunal Claim Submission'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/case-management" icon={<CaseManagementIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Tribunal Case Management / Preliminary Hearing'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/pre-hearing" icon={<PreHearingIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Pre-Hearing Preparation'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/final-hearing" icon={<FinalHearingIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Final Hearing'}
            </SidebarMenuItem>

            <SidebarMenuItem href="/post-hearing" icon={<PostHearingIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Post-Hearing & Appeals'}
            </SidebarMenuItem>
          </ul>

          {/* Tools Section */}
          <SidebarSectionTitle>{sidebarExpanded ? 'Tools' : ''}</SidebarSectionTitle>
          <ul className="mt-3">
            {/* <SidebarMenuItem href="/tasks/list" icon={<TasksIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Tasks'}
            </SidebarMenuItem> */}
            <SidebarMenuItem href="/tools/tasks" icon={<TasksIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Tasks'}
            </SidebarMenuItem>
            <SidebarMenuItem href="/documents/dashboard" icon={<DocumentsIcon />} minimized={!sidebarExpanded}>
              {sidebarExpanded && 'Documents'}
            </SidebarMenuItem>
          </ul>

          {/* More Section */}
          <SidebarSectionTitle>{sidebarExpanded ? 'More' : ''}</SidebarSectionTitle>
          <ul className="mt-3">
            <SidebarMenuGroup title={sidebarExpanded ? 'Support Centre' : ''}>
              {() => (
                <>
                  <SidebarMenuItem href="/signin" minimized={!sidebarExpanded}>Sign in</SidebarMenuItem>
                  <SidebarMenuItem href="/signup" minimized={!sidebarExpanded}>Sign up</SidebarMenuItem>
                  <SidebarMenuItem href="/reset-password" minimized={!sidebarExpanded}>Reset Password</SidebarMenuItem>
                </>
              )}
            </SidebarMenuGroup>

            <SidebarMenuGroup
              title={sidebarExpanded ? 'Settings' : ''}
              initiallyOpen={pathname.includes('settings')}
              icon={<SettingsIcon />}
            >
              {() => (
                <>
                  <SidebarMenuItem href="/settings/account" minimized={!sidebarExpanded}>My Account</SidebarMenuItem>
                  <SidebarMenuItem href="/settings/notifications" minimized={!sidebarExpanded}>My Notifications</SidebarMenuItem>
                </>
              )}
            </SidebarMenuGroup>

            <SidebarMenuGroup
              title={sidebarExpanded ? 'Feedback' : ''}
              initiallyOpen={pathname.includes('feedback')}
              icon={<DashboardIcon />} /* Replace with proper feedback icon if you have */
            >
              {() => (
                <>
                  <SidebarMenuItem href="/feedback/give-feedback" minimized={!sidebarExpanded}>Give Feedback</SidebarMenuItem>
                </>
              )}
            </SidebarMenuGroup>
          </ul>
        </nav>
      </div>
    </>
  )
}
