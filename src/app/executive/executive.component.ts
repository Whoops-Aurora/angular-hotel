import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
 /* template: `<div class="container">
              <h2 style="color:red">Executive rooms</h2>
              <form>
                <input type="text" placeholder="Enter your name" [(ngModel)]="name"><br><br>
  
                <input type="button" value="Get the Cost" (click)="getCost()"><br><br>
                <input type="button" value="Book ticket" (click)="Book()"><br><br>
                <input type="text" placeholder="Total cost" [(ngModel)]="cost"><br><br>
              </form>
            </div>`,*/
  styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent implements OnInit {
  name: String;
  idProof: number;
  noOfAdults: number;
  noOfChildren: number;
  cost: number;
  costStatus: boolean;
  dob: String;
  tempdob: String;

  constructor() { }
  getCost(){
    if(this.noOfAdults == null || this.idProof == null || this.name == null || this.noOfChildren == null){
      alert("Please enter the details properly. Some fields are not filled!!");
    }else{
      this.cost = (this.noOfAdults + this.noOfChildren/2)*800;
      this.costStatus = true;
    }
  }
  Book(){
    if(this.dob == this.tempdob){
      alert("Room already booked");
    }
    else if(this.costStatus){
      alert("Ticket booked");
      this.tempdob = this.dob;
    }
    else
      alert("Please check out the cost before booking");
  }
  ngOnInit() {
  }

}
