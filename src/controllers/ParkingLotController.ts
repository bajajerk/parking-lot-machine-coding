import {parkingLotService, vehicleService} from "../services";
import {ParkingTariff} from "../models/ParkingTariff";

module.exports = {
	onboardParkingSlot: (address: string, parkingTariff: ParkingTariff, twoWheelerCount: number, carSlotsCount: number) => {
		return parkingLotService.create(address, parkingTariff, twoWheelerCount, carSlotsCount);
	}
}
