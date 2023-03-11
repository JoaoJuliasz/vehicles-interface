import instance from "../../../config/config";

export default class GetFilteredVehicles {

    constructor(private searchValue: string) { }

     execute() {
        return instance.get(`find?q=${this.searchValue}`)
    }

}