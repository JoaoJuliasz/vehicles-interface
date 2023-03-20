import { describe, expect, it, vi } from 'vitest'

import { render, screen, userEvent } from '../../../test-utils'
import VehicleItem from './VehicleItem'

describe('VehicleItem', () => {
    it('should render correctly', () => {
        const vehicle = {
            marca: "Jeep",
            veiculo: "Renegade",
            ano: 2022
        }
        const changeDetailedVehicle = vi.fn()
        render(<VehicleItem vehicle={vehicle} changeDetailedVehicle={changeDetailedVehicle} />)
        const vehicleName = screen.getByText(/renegade/i)
        expect(vehicleName).toBeInTheDocument()
    })

    it('changeDetailedVehicle should be called', async () => {
        userEvent.setup()
        const vehicle = {
            marca: "Jeep",
            veiculo: "Renegade",
            ano: 2022,
            _id: "cef79358-c6b5-11ed-afa1-0242ac120002"
        }
        const changeDetailedVehicle = vi.fn()
        render(<VehicleItem vehicle={vehicle} changeDetailedVehicle={changeDetailedVehicle} />)
        const vehicleName = screen.getByText(/renegade/i)
        await userEvent.click(vehicleName)
        expect(changeDetailedVehicle).toBeCalled()
    })
})