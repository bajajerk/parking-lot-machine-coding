import {ParkingLot} from "./ParkingLot";
import {Vehicle, VehicleType} from "./Vehicle";


export class ParkingTicket {
	private parkingLot: ParkingLot;
	private vehicle: Vehicle;
	private entryTime: Date;
	private exitTime: Date | null = null;
	private billedAmount: number = 0;
	private isActive: boolean = true;

	constructor(parkingLot: ParkingLot, vehicle: Vehicle, entryTime: Date) {
		this.parkingLot = parkingLot;
		this.vehicle = vehicle;
		this.entryTime = entryTime;
	}

	getEntryTime(){
		return this.entryTime;
	}

	getVehicle() {
		return this.vehicle;
	}

	getParkingLot() {
		return this.parkingLot;
	}

	updateExitTimeAndBill(exitTime: Date, billedAmount: number) {
		this.exitTime = exitTime;
		this.isActive = false;
		this.billedAmount = billedAmount;
		return this;
	}

}
