import {ParkingTariff} from "./ParkingTariff";
import {Vehicle, VehicleType} from "./Vehicle";

export class ParkingLot {
	//can be a address Object(pincode, street etc)
	private address: string;
	private parkingTariff: ParkingTariff;

	private twoWheelerCount: number;
	private carSlotsCount: number;
	private parkedVehicles: Vehicle[];

	constructor(address: string, parkingTariff: ParkingTariff, twoWheelerCount: number, carSlotsCount: number) {
		this.address = address;
		this.parkingTariff = parkingTariff;
		this.carSlotsCount = carSlotsCount;
		this.twoWheelerCount = twoWheelerCount;
		this.parkedVehicles = [];
	}

	isTwoWhellerSlotsAvailable() {
		return this.twoWheelerCount !== 0;
	}

	isCarSlotsAvailable() {
		return this.carSlotsCount !== 0;
	}

	getTwoWheelerCostPerHour() {
		return this.parkingTariff.getTwoWheelerFeePerHour();
	}

	getCarFeePerHour() {
		return this.parkingTariff.getCarFeePerHour();
	}

	parkVehicle(vehicle: Vehicle) {

		if (vehicle.getType() === VehicleType.CAR && this.isCarSlotsAvailable()) {
			this.carSlotsCount--;
		} else if (this.isTwoWhellerSlotsAvailable()) {
			this.twoWheelerCount--;
		}
		this.parkedVehicles.push(vehicle);
	}

	deparkVehicle(vehicle: Vehicle) {
		if (vehicle.getType() === VehicleType.CAR) {
			this.carSlotsCount++;
		} else if (this.isTwoWhellerSlotsAvailable()) {
			this.twoWheelerCount++;
		}
		this.parkedVehicles = this.parkedVehicles.filter(vehicleItr => vehicleItr !== vehicle);
	}

}



