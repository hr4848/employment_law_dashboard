'use client'
import React from 'react'
import { LeftArrowIcon, RightArrowIcon } from './icons'

interface Props {
  isMinimized: boolean
  onToggle: () => void
  isVisible: boolean
}

export default function SidebarMinimizationToggle({ isMinimized, onToggle, isVisible }: Props) {
  if (!isVisible) return null

  return (
    <button
      onClick={onToggle}
      aria-label={isMinimized ? 'Expand sidebar' : 'Collapse sidebar'}
      className="
        absolute top-3 left-full -ml-6 p-1 bg-gray-200 rounded
        hover:bg-gray-300 transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
        z-50
      "
      type="button"
    >
      {isMinimized ? (
        <RightArrowIcon className="w-5 h-5" />
      ) : (
        <LeftArrowIcon className="w-5 h-5" />
      )}
    </button>
  )
}
