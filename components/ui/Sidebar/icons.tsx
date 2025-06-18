// /components/ui/Sidebar/icons.tsx
import React from 'react'

export function DashboardIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" />
      <rect x="9" y="2" width="5" height="3" rx="1" stroke="currentColor" />
      <rect x="9" y="7" width="5" height="7" rx="1" stroke="currentColor" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" />
    </svg>
  )
}



export function SettingsIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" stroke="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8h-2M4 8H2M8 14v-2M8 4V2M11.314 11.314l-1.414-1.414M5.636 5.636L4.222 4.222M11.314 4.686l-1.414 1.414M5.636 10.364L4.222 11.778"
      />
    </svg>
  )
}

export function GrievanceIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" />
      <path d="M8 4v4" stroke="currentColor" strokeLinecap="round" />
      <circle cx="8" cy="11" r="1" fill="currentColor" />
    </svg>
  )
}

export function TasksIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" />
      <path d="M6 8l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DocumentsIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="4" y="2" width="8" height="12" rx="1" stroke="currentColor" />
      <path d="M6 6h4M6 9h4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

export function AcasIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 12l4-8 4 8H2z" stroke="currentColor" />
      <path d="M8 4l4 8" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

export function TribunalClaimIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" />
      <path d="M5 8h6" stroke="currentColor" strokeLinecap="round" />
      <path d="M8 5v6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

export function CaseManagementIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" />
      <path d="M2 7h12" stroke="currentColor" />
      <circle cx="6" cy="9" r="1" fill="currentColor" />
      <circle cx="10" cy="9" r="1" fill="currentColor" />
    </svg>
  )
}

export function PreHearingIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 12h10M3 4h10M3 8h10" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

export function FinalHearingIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" />
      <path d="M8 5v6M5 8h6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

export function PostHearingIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 4h10v8H3z" stroke="currentColor" />
      <path d="M8 8l4-4M8 8l4 4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}


export const LeftArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const RightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);








