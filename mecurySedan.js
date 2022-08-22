import Vehicle from "./vehicle.js";
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160; 
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger() {
        if (this.passenger < this.maxPassengers) {
            if ((num+this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "does not have enough space to take all passengers");

            }
            
        } else {
            console.log(this.model + " " + this.make + "is at max capacity")
        }
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine is starting.");
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    
    checkService() {
        if (this.mileage > 3000),
        this.scheduleService == true;
        return this.scheduleService; 
    }

let myCar = new Car('mercury', 'sedan', '2002', 'purple', 61312)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)


