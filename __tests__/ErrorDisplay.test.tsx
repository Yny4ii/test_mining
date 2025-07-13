import { render, screen } from '@testing-library/react'
import ErrorDisplay from '@/app/shared/ui/ErrorDisplay'

describe('ErrorDisplay', () => {
  it('renders error message', () => {
    render(<ErrorDisplay message="Something went wrong" />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('renders default title', () => {
    render(<ErrorDisplay message="Error message" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('renders custom title', () => {
    render(<ErrorDisplay title="Custom Error" message="Error message" />)

    expect(screen.getByText('Custom Error')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<ErrorDisplay message="Error message" description="Please try again" />)

    expect(screen.getByText('Please try again')).toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<ErrorDisplay message="Error message" />)
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
