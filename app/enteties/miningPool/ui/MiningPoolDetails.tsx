import React from 'react'
import { MiningPool } from '@/app/enteties/miningPool/types'
import DetailsBlock from '@/app/enteties/miningPool/ui/DetailsBlock'
import DetailsRow from '@/app/enteties/miningPool/ui/DetailsRow'
import Status from '@/app/enteties/miningPool/ui/Status'

interface MiningPoolDetailsProps {
  miningPool: MiningPool
}

const MiningPoolDetails = ({ miningPool }: MiningPoolDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h2 className="mb-2 text-xl font-semibold">{miningPool.name}</h2>
        <div className="flex items-center gap-2">
          <Status status={miningPool.status} />
          <span className="text-sm text-gray-500">• {miningPool.location}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DetailsBlock title={'24h Revenue'}>
          {miningPool.last24hRevenueBTC.toFixed(4)} BTC
        </DetailsBlock>
        <DetailsBlock title={'Hashrate'}>{miningPool.hashrateTHs.toFixed(1)} TH/s</DetailsBlock>
        <DetailsBlock title={'Uptime'}>{miningPool.uptimePercent.toFixed(2)}%</DetailsBlock>
        <DetailsBlock title={'Active Workers'}>
          {miningPool.activeWorkers.toLocaleString()}
        </DetailsBlock>
      </div>
      <div className="space-y-3">
        <DetailsRow title={'Fee'}>{miningPool.feePercent}%</DetailsRow>
        <DetailsRow title={'Reject Rate'}>{(miningPool.rejectRate * 100).toFixed(2)}%</DetailsRow>
      </div>
    </div>
  )
}

export default MiningPoolDetails
