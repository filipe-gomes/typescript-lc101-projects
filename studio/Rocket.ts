import { Payload } from './Payload';
import { Cargo } from './cargo';
import { Astronaut } from './astronaut';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            total += items[i].massKg
        } 
        return total
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        } else {
            return false
        }
    }

    addCargo(cargo: Cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
        } else {
            return false
        }
    } 

    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        } else {
            return false
        }
    }
}