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
		// @ts-ignore
		const parkingTimeInMinutes = Math.abs(new Date(exitTime) - new Date(ticket.getEntryTime()));
		const parkingTimeInHours = Math.ceil((parkingTimeInMinutes / 3600000));

		const vehicle = ticket.getVehicle();
		const parkingLot = ticket.getParkingLot();

		let billedAmount: number = 0;
		if (vehicle.getType() === VehicleType.CAR) {
			billedAmount = parkingTimeInHours * parkingLot.getCarFeePerHour()
		} else if (vehicle.getType() === VehicleType.TWOWHEELER) {
			billedAmount = parkingTimeInHours * parkingLot.getTwoWheelerCostPerHour()
		}

		return ticket.updateExitTimeAndBill(exitTime, billedAmount);
	}


}
