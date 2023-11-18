// travel-summary.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-travel-summary',
  templateUrl: './travel-summary.component.html',
  styleUrls: ['./travel-summary.component.css']
})
export class TravelSummaryComponent {
  @Input() destinations: Array<any> = [];
  @Input() bookedFlights: {"name": string, "surname": string, "dni": string, "birthday": string, "bookedSeats": number, "destination": string}[] = [];
  viewing: boolean = false;

  @Output() canInteract = new EventEmitter<boolean>()

  constructor() {
    let tmp: string | null = localStorage.getItem("BOOKINGS");

    if (tmp != null) {
      this.bookedFlights = JSON.parse(tmp);
    }
  }

  changeRender() {
    this.viewing = !this.viewing;
    this.canInteract.emit(this.viewing);
  }


  //these two functions use lambda, like java :)
  getTotalBookedSeats(destination: any): number {
    return this.bookedFlights
      .filter(book => book.destination === destination.name)  // Filter flights with the specific destination
      .reduce((total, book) => total + book.bookedSeats, 0);  // Sum up booked seats using reduce
  }

  getBookedFlights(destination: any): any[] {
    return this.bookedFlights.filter(book => book.destination === destination.name);  // Filter flights with the specific destination
  }
}
