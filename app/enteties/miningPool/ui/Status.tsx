import React from 'react'
import { StatusType } from '@/app/enteties/miningPool/types'

const statusConfig: Record<StatusType, { color: string; label: string; bgColor: string }> = {
  online: { color: 'text-green-600', label: 'Online', bgColor: 'bg-green-500' },
  offline: { color: 'text-red-600', label: 'Offline', bgColor: 'bg-red-500' },
  degraded: { color: 'text-yellow-600', label: 'Degraded', bgColor: 'bg-yellow-500' },
}

interface StatusProps {
  status: StatusType
}

const Status = ({ status }: StatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full ${statusConfig[status].bgColor}`} />
      <span className={`font-medium capitalize ${statusConfig[status].color}`}>
        {statusConfig[status].label}
      </span>
    </div>
  )
}

export default Status
