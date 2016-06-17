import {Beer} from './beer'
export class Person {
  public beers: Beer[]
  constructor(
    public id: number, 
    public guid: string,
    public name: string,
    public email: string,
    public phone: string,
    public clubName: string,
    public ahaNumber: string,
    public line1: string,
    public line2: string,
    public city: string,
    public state: string,
    public zip: string
    ) {
      this.beers = [];
   }
}