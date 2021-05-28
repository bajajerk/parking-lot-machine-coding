const {onboardVehicle, getParkingTickets} = require('./controllers/VehicleController')
const {onboardParkingSlot} = require('./controllers/ParkingLotController');
const {createTicket, billVehicle} = require('./controllers/ParkingTicketController');

import { ParkingTariff } from "./models/ParkingTariff";
import {VehicleType} from "./models/Vehicle";

const vehicle1 = onboardVehicle("DL-123", VehicleType.CAR);
const vehicle2 = onboardVehicle("DL-1213", VehicleType.CAR);

const scooter1 = onboardVehicle("DL-12131", VehicleType.TWOWHEELER);


const dlfParkingLot = onboardParkingSlot("DLF-PROMENADE", new ParkingTariff(10, 20), 1, 1);


//onbaord vehicle 1 to dlf
const ticket = createTicket(dlfParkingLot, vehicle1, (new Date('2021/10/09 12:00')));

//onbaord vehicle 1 out of dlf
const billedTicket = billVehicle(vehicle1, dlfParkingLot, (new Date('2021/10/09 13:00')));




//onbaord scooter 1 to dlf
const ticket2 = createTicket(dlfParkingLot, scooter1, (new Date('2021/10/09 12:00')));


console.log(dlfParkingLot)

// get parking tickets for vehicle 1
console.log(getParkingTickets("DL-123", VehicleType.CAR))


