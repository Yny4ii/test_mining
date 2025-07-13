'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MiningPool, StatusType } from '@/app/enteties/miningPool/types'
import Link from 'next/link'
import { ArrowUpDown } from 'lucide-react'
import Status from '@/app/enteties/miningPool/ui/Status'

export const columns: ColumnDef<MiningPool>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center gap-1 rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Name
        <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'hashrateTHs',
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center gap-1 justify-self-center rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Hashrate (TH/s)
        <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="text-center">
        {Number(row.getValue('hashrateTHs')).toLocaleString('en-US', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}
      </div>
    ),
  },
  {
    accessorKey: 'activeWorkers',
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center gap-1 justify-self-center rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Active Workers
        <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{Number(row.getValue('activeWorkers')).toString()}</div>
    ),
  },
  {
    accessorKey: 'rejectRate',
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center gap-1 justify-self-center rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Reject Rate
        <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{(Number(row.getValue('rejectRate')) * 100).toFixed(2)}%</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as StatusType

      return <Status status={status} />
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Actions',
    cell: ({ row }) => (
      <Link
        href={`/mining-pools/${row.original.id}`}
        className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Details
      </Link>
    ),
  },
]
