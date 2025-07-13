import React from 'react'
import Modal from '@/app/shared/ui/Modal'
import { MiningPool } from '@/app/enteties/miningPool/types'
import MiningPoolDetails from '@/app/enteties/miningPool/ui/MiningPoolDetails'
import ErrorDisplay from '@/app/shared/ui/ErrorDisplay'

const getMiningPool = async (id: string): Promise<MiningPool | { error: string }> => {
  try {
    const res = await fetch(`http://localhost:3000/api/mining-pools/${id}`)
    if (!res.ok) {
      if (res.status === 404) {
        return { error: `Mining pool with id "${id}" not found` }
      }
      return { error: `HTTP error! status: ${res.status}` }
    }
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch mining pool:', error)
    return { error: 'Failed to load mining pool details' }
  }
}

interface MiningPoolProps {
  params: Promise<{
    id: string
  }>
}

const Page = async ({ params }: MiningPoolProps) => {
  const { id } = await params
  const result = await getMiningPool(id)

  if ('error' in result) {
    return (
      <Modal title="Error">
        <ErrorDisplay
          title="Mining Pool Not Found"
          message={result.error}
          description="The mining pool you're looking for doesn't exist or has been removed."
        />
      </Modal>
    )
  }
  return (
    <Modal title="Pool Details">
      <MiningPoolDetails miningPool={result} />
    </Modal>
  )
}

export default Page
