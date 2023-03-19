import { describe, expect, it } from 'vitest'

import { render, screen } from '../../../test-utils'
import CreateVehicle from './CreateVehicle'

describe('CreateVehicle', () => {
    it('should render correctly', () => {
        render(<CreateVehicle />)
        const title = screen.getByText('Vehicle')
        expect(title).toBeInTheDocument()
    })
})