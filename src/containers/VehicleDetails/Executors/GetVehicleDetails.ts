import instance from "../../../config/config"

export default class GetVehicleDetails {

    constructor(private vehicleId: string) { }

    async execute() {
        const response = await instance.get(this.vehicleId)
        return response
    }

}