import {parkingTicketService, vehicleService} from "../services";
import {VehicleType} from "../models/Vehicle";

module.exports = {
	onboardVehicle: (registerationNumber: string, type: VehicleType) => {
		return vehicleService.onboard(registerationNumber, type);
	},

	getParkingTickets(registerationNumber: string, type: VehicleType){
		const vehicle = vehicleService.onboard(registerationNumber, type);
		return parkingTicketService.getVehicleTickets(vehicle);
	}
}

