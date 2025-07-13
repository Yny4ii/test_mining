import { NextResponse } from 'next/server'
import { MINING_POOL_DATA } from '@/app/enteties/miningPool/constants'
import { MiningPool } from '@/app/enteties/miningPool/types'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<MiningPool | { error: string }>> {
  try {
    const { id } = await params
    const miningPool = MINING_POOL_DATA.find(miningPool => miningPool.id === id)

    if (!miningPool) {
      return NextResponse.json({ error: `Mining pool with id ${id} not found` }, { status: 404 })
    }

    return NextResponse.json(miningPool)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
