import React from 'react'

interface DetailsRowProps {
  title: string
  children: React.ReactNode
}

const DetailsRow = ({ title, children }: DetailsRowProps) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <span className="text-gray-600 dark:text-gray-400">{title}</span>
      <span className="font-medium">{children}</span>
    </div>
  )
}

export default DetailsRow
