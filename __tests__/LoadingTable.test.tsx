import { render, screen } from '@testing-library/react'
import LoadingTable from '@/app/shared/ui/LoadingTable'

describe('LoadingTable', () => {
  it('renders loading skeleton', () => {
    render(<LoadingTable />)

    const container = screen.getByTestId('loading-table')
    expect(container).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    render(<LoadingTable />)

    const container = screen.getByTestId('loading-table')
    expect(container).toHaveClass('rounded-md', 'border')
  })

  it('contains skeleton elements', () => {
    render(<LoadingTable />)

    const skeletonElements = document.querySelectorAll('.animate-pulse')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })
})
