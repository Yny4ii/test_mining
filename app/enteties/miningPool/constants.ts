import { MiningPool } from '@/app/enteties/miningPool/types'

export const MINING_POOL_DATA: MiningPool[] = [
  {
    id: 'pool-1',
    name: 'US East Pool',
    hashrateTHs: 830.5,
    activeWorkers: 1240,
    rejectRate: 0.012,
    status: 'online',
    last24hRevenueBTC: 0.035,
    uptimePercent: 99.82,
    location: 'Ashburn, VA',
    feePercent: 1.0,
  },
  {
    id: 'pool-2',
    name: 'EU Central Pool',
    hashrateTHs: 460.3,
    activeWorkers: 876,
    rejectRate: 0.045,
    status: 'degraded',
    last24hRevenueBTC: 0.025,
    uptimePercent: 49.81,
    location: 'Frankfurt, Germany',
    feePercent: 2.0,
  },
  {
    id: 'pool-3',
    name: 'Asia Pacific Pool',
    hashrateTHs: 620.7,
    activeWorkers: 1105,
    rejectRate: 0.023,
    status: 'online',
    last24hRevenueBTC: 0.031,
    uptimePercent: 98.45,
    location: 'Singapore',
    feePercent: 1.5,
  },
  {
    id: 'pool-4',
    name: 'US West Pool',
    hashrateTHs: 720.2,
    activeWorkers: 980,
    rejectRate: 0.018,
    status: 'online',
    last24hRevenueBTC: 0.029,
    uptimePercent: 99.12,
    location: 'San Francisco, CA',
    feePercent: 1.2,
  },
  {
    id: 'pool-5',
    name: 'South America Pool',
    hashrateTHs: 380.4,
    activeWorkers: 650,
    rejectRate: 0.032,
    status: 'offline',
    last24hRevenueBTC: 0.018,
    uptimePercent: 85.67,
    location: 'São Paulo, Brazil',
    feePercent: 2.5,
  },
]
