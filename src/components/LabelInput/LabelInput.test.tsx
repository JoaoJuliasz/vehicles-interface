import { describe, expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '../../../test-utils'
import LabelInput from './LabelInput'

describe('LabelInput', () => {
    it('should render correctly', () => {
        const handleChange = vi.fn()
        render(<LabelInput handleChange={handleChange} objType="veiculo" title="Vehicle" value="Renegade" />)
        const title = screen.getByText('Vehicle')
        expect(title).toBeInTheDocument()
    })

    it('handleChange should be called', async () => {
        userEvent.setup()
        const handleChange = vi.fn()
        render(<LabelInput handleChange={handleChange} objType="veiculo" title="Vehicle" value="Renegade" />)
        const labelInput: HTMLInputElement = screen.getByRole('textbox')
        await userEvent.type(labelInput, 'Compass')
        expect(handleChange).toBeCalled()
    })
})