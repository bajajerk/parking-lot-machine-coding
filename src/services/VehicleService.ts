import {Vehicle, VehicleType} from "../models/Vehicle";


export class VehicleService {
	private vehicleDB: Vehicle[]

	constructor() {
		this.vehicleDB = [];
	}

	vehicleList() {
		return this.vehicleDB;
	}

	onboard(registerationNumber: string, type: VehicleType) {
		const vehicle = this.vehicleDB.find(vehicle => vehicle.getRegisterationNumber() === registerationNumber);
		if(vehicle){
			return vehicle;
		}
		else{
			const newVehicle = new Vehicle(registerationNumber, type);
			this.vehicleDB.push(newVehicle);
			return newVehicle;
		}
	}

	// getMyPastParkingTickets(registerationNumber: string){
	// 	const vehicle = this.vehicleDB.find(vehicle => vehicle.getRegisterationNumber() === registerationNumber);
	// 	if(!vehicle){
	// 		return [];
	// 	}
	// 	else{
	// 		const
	// 	}
	//
	// }


}
