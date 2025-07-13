import { NextResponse } from 'next/server'
import { MiningPool } from '@/app/enteties/miningPool/types'
import { MINING_POOL_DATA } from '@/app/enteties/miningPool/constants'

export async function GET(req: Request): Promise<NextResponse<MiningPool[]>> {
  return NextResponse.json(MINING_POOL_DATA)
}
