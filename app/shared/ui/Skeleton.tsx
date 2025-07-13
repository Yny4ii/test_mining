import React from 'react'

interface SkeletonProps {
  className: string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse rounded-lg bg-blue-50 ${className}`}
      data-testid="skeleton"
    ></div>
  )
}

export default Skeleton
