import { describe, expect, it, vi } from 'vitest'

import { render, screen, fireEvent } from '../../../test-utils'
import LabelTextArea from './LabelTextArea'

describe('LabelTextArea', () => {
    it('should render correctly', () => {
        const handleChange = vi.fn()
        render(<LabelTextArea handleChange={handleChange} objType="descricao" title="Description" value="" />)
        const title = screen.getByText('Description')
        expect(title).toBeInTheDocument()
    })
    
    it('handleChange should be called', () => {
        const handleChange = vi.fn()
        render(<LabelTextArea handleChange={handleChange} objType="descricao" title="Description" value="" />)
        const textArea: HTMLTextAreaElement = screen.getByRole('textbox')
        fireEvent.change(textArea, {target: {value: "This is Chevrolet's new car"}})
        expect(handleChange).toBeCalled()
    })
})