import { columns } from '@/app/enteties/miningPool/ui/ColumnsDef'
import { DataTable } from '@/app/shared/ui/DataTable'
import { MiningPool } from '@/app/enteties/miningPool/types'
import { Suspense } from 'react'
import ErrorDisplay from '@/app/shared/ui/ErrorDisplay'
import LoadingTable from '@/app/shared/ui/LoadingTable'

const getData = async (): Promise<MiningPool[] | { error: string }> => {
  try {
    const res = await fetch('http://localhost:3000/api/mining-pools')
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch mining pool:', error)
    return { error: 'Failed to load mining pools, try again later' }
  }
}

export default async function Home() {
  const result = await getData()
  if ('error' in result) {
    return (
      <ErrorDisplay
        title="Error loading mining pools"
        message={result.error}
        description="Please try refreshing the page or contact support if the problem persists."
      />
    )
  }
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<LoadingTable />}>
        <DataTable columns={columns} data={result} />
      </Suspense>
    </div>
  )
}
