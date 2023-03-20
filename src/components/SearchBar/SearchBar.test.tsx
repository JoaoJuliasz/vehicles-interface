import { describe, expect, it } from 'vitest'

import { fireEvent, render, screen } from '../../../test-utils'
import SearchBar from './SearchBar'


describe('SearchBar', () => {
    it('should render correctly', () => {
        render(<SearchBar />)
        const search = screen.getByRole('textbox')
        expect(search).toBeInTheDocument()
    })

    it('should change input value', () => {
        render(<SearchBar />)
        const search: HTMLInputElement = screen.getByRole('textbox')
        fireEvent.change(search, {target: {value: "Rene"}})
        expect(search.value).toBe('Rene')
    })
})