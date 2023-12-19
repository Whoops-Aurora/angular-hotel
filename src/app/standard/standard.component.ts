import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {

  name: String;
  idProof: number;
  noOfAdults: number;
  noOfChildren: number;
  cost: number;
  costStatus: boolean;

  constructor() { }
  getCost(){
    if(this.noOfAdults == null || this.idProof == null || this.name == null || this.noOfChildren == null){
      alert("Please enter the details properly. Some fields are not filled!!");
    }else if(this.noOfAdults > 4 && this.noOfChildren > 2 || this.noOfAdults > 2 && this.noOfChildren > 4){
      alert("Room size for your specifications not present in this class")
    }else{
      this.cost = (this.noOfAdults + this.noOfChildren/2)*500;
      this.costStatus = true;
    }
  }
  Book(){
  if(this.costStatus)
    alert("Ticket booked");
  else
    alert("Please check out the cost before booking");
  }

  ngOnInit() {
  }

}
