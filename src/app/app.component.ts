import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelBookingDAW2';

  interaction: boolean = true;

  name: string="";
  surname: string="";
  dni: string="";
  birthday: string="";
  selectedDestination: string="";
  bookedValue: boolean = false;
  bookedSeats!:number;

  destinations=[
    {
      name: "París",
      description: "Capital de França i la ciutat més poblada del país",
      img: ["assets/img/fotoParis.jpg", "assets/img/fotoParis2.jpg","assets/img/fotoParis3.jpg"],
      dispFlights: 60
    },
    {
      name: "Viena",
      description: "Capital de Austria i la ciutat més poblada del país",
      img: ["assets/img/fotoViena.jpeg", "assets/img/fotoViena2.jpg", "assets/img/fotoViena3.jpg"],
      dispFlights: 60
    }
  ]

  public bookedFlights:{"name":string, "surname":string, "dni":string, "birthday":string, "bookedSeats":number, "destination":string}[]=[
    {
      "name":"Pedro",
      "surname":"Alvárez",
      "dni":"12345678A",
      "birthday":'2002-08-08',
      "bookedSeats":4,
      "destination":"Viena"
    },
    {
      "name":"Robert",
      "surname":"García",
      "dni":"87654321R",
      "birthday":'2002-09-12',
      "bookedSeats":7,
      "destination":"París"
    },
    {
      "name":"Mariano",
      "surname":"Delgado",
      "dni":"24681012N",
      "birthday":'1976-09-11',
      "bookedSeats":2,
      "destination":"París"
    },
    {
      "name":"Amador",
      "surname":"Rivas",
      "dni":"78945632Z",
      "birthday":'1988-02-19',
      "bookedSeats":5,
      "destination":"Viena"
    },
    {
      "name":"Máximo",
      "surname":"Angulo",
      "dni":"32947568P",
      "birthday":'1969-12-23',
      "bookedSeats":1,
      "destination":"París"
    }
  ];
  
  constructor(){

    let tmp: string | null =localStorage.getItem("BOOKINGS");

    if(tmp == null){
      localStorage.setItem("BOOKINGS", JSON.stringify(this.bookedFlights));
    }else{
      this.bookedFlights=JSON.parse(tmp);
    }

  }

  changeState(bookedSeats:number){
    this.bookedSeats=bookedSeats;
    this.bookedValue=true;
  }

  canInteract(viewing:boolean){
    this.interaction=!viewing;
  }
  
  createJSON(){
    
    if(this.selectedDestination=="París"){
      this.destinations[0].dispFlights=this.destinations[0].dispFlights-this.bookedSeats;
    }else{
      this.destinations[1].dispFlights=this.destinations[1].dispFlights-this.bookedSeats;
    }

    const newBooking = {
      name: this.name,
      surname: this.surname,
      dni: this.dni,
      birthday: this.birthday,
      bookedSeats: this.bookedSeats,
      destination: this.selectedDestination
    }
    
    this.bookedFlights.push(newBooking),
    localStorage.setItem('BOOKINGS', JSON.stringify(this.bookedFlights));
    this.resetValues();
  }

  cancelBooking(){
    this.resetValues();
  }

  resetValues(){
    this.name="";
    this.surname="";
    this.dni="";
    this.birthday!;
    this.selectedDestination="";
    this.bookedValue=false;
  }
}
