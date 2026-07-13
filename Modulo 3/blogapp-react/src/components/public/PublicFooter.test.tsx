// src/components/public/PublicFooter.test.tsx
import { render, screen } from '@testing-library/react'
import PublicFooter from '../private/PublicFooter'

describe('PublicFooter', () => {
  it('should render the BlogApp copyright text', () => {
    render(<PublicFooter />)
    expect(screen.getByText(/BlogApp/)).toBeInTheDocument()
  })
})