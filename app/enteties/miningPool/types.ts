export interface MiningPool {
  id: string
  name: string
  hashrateTHs: number
  activeWorkers: number
  rejectRate: number
  status: StatusType
  last24hRevenueBTC: number
  uptimePercent: number
  location: string
  feePercent: number
}
export type StatusType = 'degraded' | 'online' | 'offline'
