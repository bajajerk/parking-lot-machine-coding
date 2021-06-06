export enum VehicleType {
	CAR = 'CAR',
	TWOWHEELER = 'TWOWHEELER'
}

export class Vehicle {
	private registerationNumber: string;
	private type: VehicleType;

	constructor(registerationNumber: string, type: VehicleType) {
		this.registerationNumber = registerationNumber;
		this.type = type;
	}

	getRegisterationNumber() {
		return this.registerationNumber
	}

	getType(){
		return this.type;
	}
}
