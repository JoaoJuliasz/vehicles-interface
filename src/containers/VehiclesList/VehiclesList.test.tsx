import { describe, expect, it, vi } from 'vitest'

import { render, screen } from '../../../test-utils'
import VehiclesList from './VehiclesList'

describe('VehiclesList', () => {

    it('should render correctly', () => {
        const changeDetailedVehicle = vi.fn()
        render(<VehiclesList changeDetailedVehicle={changeDetailedVehicle} />)
        const listTitle = screen.getByText(/vehicles list/i)
        expect(listTitle).toBeInTheDocument()
    })

})