import { describe, expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '../../../test-utils'
import Button from './Button'

describe('Button', () => {
    it('should render correctly', () => {
        const children = <span>Test</span>
        render(<Button children={children} />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('onClick function should be called', async () => {
        userEvent.setup()
        const children = <span>Test</span>
        const onClick = vi.fn()
        render(<Button children={children} onClick={onClick}/>)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(onClick).toBeCalled()
    })
})