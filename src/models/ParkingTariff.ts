export class ParkingTariff{
	private twoWheelerFeePerHour: number;
	private carFeePerHouse: number;

	constructor(twoWheelerFeePerHour: number, carFeePerHouse: number) {
		this.twoWheelerFeePerHour = twoWheelerFeePerHour;
		this.carFeePerHouse = carFeePerHouse;
	}

	getTwoWheelerFeePerHour(){
		return this.twoWheelerFeePerHour;
	}

	getCarFeePerHour(){
		return this.carFeePerHouse;
	}
}
