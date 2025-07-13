import React from 'react'
import MiningPoolDetails from '@/app/enteties/miningPool/ui/MiningPoolDetails'
import { MiningPool } from '@/app/enteties/miningPool/types'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ErrorDisplay from '@/app/shared/ui/ErrorDisplay'

const getMiningPool = async (id: string): Promise<MiningPool | { error: string }> => {
  try {
    const res = await fetch(`http://localhost:3000/api/mining-pools/${id}`)

    if (!res.ok) {
      if (res.status === 404) {
        return { error: `Mining pool with id "${id}" not found` }
      }
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error('Failed to fetch mining pool:', error)
    return { error: 'Failed to load mining pool details' }
  }
}

interface MiningPoolProps {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: MiningPoolProps) => {
  const { id } = await params
  const result = await getMiningPool(id)

  if ('error' in result) {
    return (
      <div className="container mx-auto p-4">
        <div className="mb-6 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pools
          </Link>
        </div>

        <ErrorDisplay
          title="Mining Pool Not Found"
          message={result.error}
          description="The mining pool you're looking for doesn't exist or has been removed."
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Pools
        </Link>
      </div>

      <MiningPoolDetails miningPool={result} />
    </div>
  )
}

export default Page
