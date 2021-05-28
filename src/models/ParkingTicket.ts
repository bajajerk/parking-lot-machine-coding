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

	// billVehicle(exitTime: Date) {
	// 	this.exitTime = exitTime;
	// 	this.isActive = false;
	// 	this.billedAmount = this.generateBill(this.entryTime, this.exitTime, this.vehicle) as number;
	// 	return this;
	// }

	updateExitTimeAndBill(exitTime: Date, billedAmount: number) {
		this.exitTime = exitTime;
		this.isActive = false;
		this.billedAmount = billedAmount;
		return this;
	}

	// generateBill(entryTime: Date, endTime: Date, vehicle: Vehicle) {
	// 	// @ts-ignore
	// 	const parkingTimeInMinutes = Math.abs(new Date(endTime) - new Date(entryTime));
	// 	const parkingTimeInHours = Math.ceil((parkingTimeInMinutes/3600000));
	//
	// 	if (vehicle.getType() === VehicleType.CAR) {
	// 		return parkingTimeInHours * this.parkingLot.getCarFeePerHour()
	// 	} else if (vehicle.getType() === VehicleType.TWOWHEELER) {
	// 		return parkingTimeInHours * this.parkingLot.getTwoWheelerCostPerHour()
	// 	}
	// }


}
