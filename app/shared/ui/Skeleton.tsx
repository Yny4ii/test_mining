import React from 'react'

interface SkeletonProps {
  className: string
}
const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={`animate-pulse rounded-lg bg-blue-50 ${className}`}></div>
}

export default Skeleton
