import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-travel-selector',
  templateUrl: './travel-selector.component.html',
  styleUrls: ['./travel-selector.component.css']
})
export class TravelSelectorComponent {
  
  @Input() destinations: Array<any> = [];
  @Input() selectedDestination:string="";
  @Input() bookedFlights: {"name": string, "surname": string, "dni": string, "birthday": string, "bookedSeats": number, "destination": string}[] = [];


  @Output() eventBookSeats = new EventEmitter<number>()
  
  bookSeats(seatsBooked: number){
    if(this.selectedDestination=="París"){
      if(seatsBooked<=0){
        alert("No es pot reservar 0 plaçes o menys!!");
      }else if(isNaN(seatsBooked)){
        alert("No es poden reservar plaçes buides!!");
      }else if(seatsBooked>(60-this.getTotalBookedSeats(this.destinations[0]))){
        alert("No es poden reservar més plaçes de les disponibles!!");
      }else{
        this.eventBookSeats.emit(seatsBooked);
      }
    }else{
      if(seatsBooked<=0){
        alert("No es pot reservar 0 plaçes o menys!!");
      }else if(isNaN(seatsBooked)){
        alert("No es poden reservar plaçes buides!!");
      }else if(seatsBooked>(60-this.getTotalBookedSeats(this.destinations[1]))){
        alert("No es poden reservar més plaçes de les disponibles!!");
      }else{
        this.eventBookSeats.emit(seatsBooked);
      }
    }
  }

  getTotalBookedSeats(destination: any): number {
    return this.bookedFlights
      .filter(book => book.destination === destination.name)
      .reduce((total, book) => total + book.bookedSeats, 0);
  }

}
