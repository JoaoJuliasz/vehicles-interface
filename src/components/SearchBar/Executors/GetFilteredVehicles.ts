import instance from "../../../config/config";

export default class GetFilteredVehicles {

    constructor(private searchValue: string) { }

    async execute() {
        const response = await instance.get(`find?q=${this.searchValue}`)
        return response
    }

}