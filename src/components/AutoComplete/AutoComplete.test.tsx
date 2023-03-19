import { describe, expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '../../../test-utils'
import AutoComplete from './AutoComplete'

describe('AutoComplete', () => {
    it('should render correctly', () => {
        const autoComplete = [{
            veiculo: "Renegade",
            marca: "Jeep",
            ano: 2022
        }]

        const handleClick = vi.fn()
        const setAutoComplete = vi.fn()


        render(<AutoComplete autoComplete={autoComplete} setAutoComplete={setAutoComplete} handleClick={handleClick} />)
        const title = screen.getByText('Renegade')
        expect(title).toBeInTheDocument()
    })

    it('handleClick should be called', async () => {
        userEvent.setup()
        const autoComplete = [{
            veiculo: "Renegade",
            marca: "Jeep",
            ano: 2022
        }]

        const handleClick = vi.fn()
        const setAutoComplete = vi.fn()
        render(<AutoComplete autoComplete={autoComplete} setAutoComplete={setAutoComplete} handleClick={handleClick} />)
        const title = screen.getByText('Renegade')
        await userEvent.click(title)
        expect(handleClick).toBeCalled()
    })


})