import {Vehicle, VehicleType} from "../models/Vehicle";
import {ParkingLot} from "../models/ParkingLot";
import {ParkingTariff} from "../models/ParkingTariff";


export class ParkingLotService {
	private parkingLotDB: ParkingLot[]

	constructor() {
		this.parkingLotDB = [];
	}

	getList() {
		return this.parkingLotDB;
	}

	create(address: string, parkingTariff: ParkingTariff, twoWheelerCount: number, carSlotsCount: number) {
		const newLot = new ParkingLot(address, parkingTariff, twoWheelerCount, carSlotsCount);
		this.parkingLotDB.push(newLot);
		return newLot;
	}

	isParkingAvailable(parkingLot: ParkingLot, vehicle: Vehicle) {
		if (vehicle.getType() === VehicleType.CAR) {
			return parkingLot.isCarSlotsAvailable();
		} else if (vehicle.getType() === VehicleType.TWOWHEELER) {
			return parkingLot.isTwoWhellerSlotsAvailable();
		}
		return false;
	}

	parkVehicle(parkingLot: ParkingLot, vehicle: Vehicle) {
		const lot = this.parkingLotDB.find(lot => lot === parkingLot);
		if (lot) {
			lot.parkVehicle(vehicle);
		} else {
			throw "INVALID PARKING LOT, please input correct id"
		}
	}

	deparkVehicle(parkingLot: ParkingLot, vehicle: Vehicle){
		const lot = this.parkingLotDB.find(lot => lot === parkingLot) as ParkingLot;
		lot.deparkVehicle(vehicle);
	}

}
