import { describe, expect, it, vi } from 'vitest'

import { fireEvent, render, screen } from '../../../test-utils'
import LabelInput from './LabelInput'

describe('LabelInput', () => {
    it('should render correctly', () => {
        const handleChange = vi.fn()
        render(<LabelInput handleChange={handleChange} objType="veiculo" title="Vehicle" value="Renegade" />)
        const title = screen.getByText('Vehicle')
        expect(title).toBeInTheDocument()
    })

    it('handleChange should be called', () => {
        const handleChange = vi.fn()
        render(<LabelInput handleChange={handleChange} objType="veiculo" title="Vehicle" value="Renegade" />)
        const labelInput: HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(labelInput, { target: { value: "This is Chevrolet's new car" } })
        expect(handleChange).toBeCalled()
        expect(handleChange).toBeCalled()
    })
})