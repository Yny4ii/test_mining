import React from 'react'

interface DetailsBlockProps {
  title: string
  children: React.ReactNode
}

const DetailsBlock = ({ title, children }: DetailsBlockProps) => {
  return (
    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
      <div className="text-lg font-semibold">{children}</div>
    </div>
  )
}

export default DetailsBlock
