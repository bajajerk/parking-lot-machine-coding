import {parkingLotService, parkingTicketService, vehicleService} from "../services";
import {ParkingLot} from "../models/ParkingLot";
import {Vehicle} from "../models/Vehicle";

module.exports = {
	createTicket: (parkingLot: ParkingLot, vehicle: Vehicle, entryTime: Date) => {
		const isParkingAvailable = parkingLotService.isParkingAvailable(parkingLot, vehicle);
		if(isParkingAvailable){
			parkingLotService.parkVehicle(parkingLot, vehicle);
			return parkingTicketService.create(parkingLot, vehicle, entryTime);
		}
		else {
			throw "PARKING IS FULL, SORRY"
		}

	},

	billVehicle: (vehicle: Vehicle, lot: ParkingLot, exitTime: Date) => {
		const ticket = parkingTicketService.getTicket(vehicle, lot);
		if(ticket){
			parkingLotService.deparkVehicle(lot, vehicle);
			return parkingTicketService.billVehicle(ticket, exitTime);
		}
		else{
			throw "Ticket not found"
		}
	}
}
