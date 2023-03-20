import { describe, expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '../../../test-utils'
import Modal from './Modal'

describe('Modal', () => {
    it('should render correctly', () => {
        const setShow = vi.fn()
        render(<Modal method="post" title="New Vehicle" setShow={setShow} />)
        const modalTitle = screen.getByText('New Vehicle')
        expect(modalTitle).toBeInTheDocument()
    })

    it('setShow should be called', async () => {
        userEvent.setup()
        const setShow = vi.fn()
        render(<Modal method="post" title="New Vehicle" setShow={setShow} />)
        const closeBtn = screen.getByText(/close/i)
        await userEvent.click(closeBtn)
        expect(setShow).toBeCalled()
    })

    it('Add button should be disabled', async () => {
        userEvent.setup()
        const setShow = vi.fn()
        render(<Modal method="post" title="New Vehicle" setShow={setShow} />)
        const addBtn: HTMLButtonElement = screen.getByText(/add/i)
        await userEvent.click(addBtn)
        expect(setShow).not.toBeCalled()
    })
})