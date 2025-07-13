import { render, screen } from '@testing-library/react'
import Skeleton from '@/app/shared/ui/Skeleton'

describe('Skeleton', () => {
  it('renders skeleton element', () => {
    render(<Skeleton className="h-4 w-4" />)

    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Skeleton className="h-8 w-8" />)

    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveClass('h-8', 'w-8')
  })

  it('has default skeleton classes', () => {
    render(<Skeleton className="h-4" />)

    const skeleton = screen.getByTestId('skeleton')
    expect(skeleton).toHaveClass('animate-pulse', 'rounded-lg', 'bg-blue-50')
  })
})
