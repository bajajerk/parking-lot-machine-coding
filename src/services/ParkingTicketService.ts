import {Vehicle, VehicleType} from "../models/Vehicle";
import {ParkingTicket} from "../models/ParkingTicket";
import {ParkingLot} from "../models/ParkingLot";


export class ParkingTicketService {
	private parkingTicketsDb: ParkingTicket[]

	constructor() {
		this.parkingTicketsDb = [];
	}

	create(parkingLot: ParkingLot, vehicle: Vehicle, entryTime: Date) {
		const newTicket = new ParkingTicket(parkingLot, vehicle, entryTime);
		this.parkingTicketsDb.push(newTicket);
		return newTicket;
	}

	getTicket(vehicle: Vehicle, lot: ParkingLot) {
		return this.parkingTicketsDb.find(ticket => ticket.getVehicle() === vehicle && ticket.getParkingLot() === lot);

	}

	getVehicleTickets(vehicle: Vehicle) {
		return this.parkingTicketsDb.filter(ticket => ticket.getVehicle() === vehicle);
	}

	billVehicle(ticket: ParkingTicket, exitTime: Date) {
		return ticket.billVehicle(exitTime);
	}
}
