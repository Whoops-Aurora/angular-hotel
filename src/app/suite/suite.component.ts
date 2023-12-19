import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit {

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
    }else if(this.noOfAdults > 25 && this.noOfChildren > 15 || this.noOfAdults > 36 && this.noOfChildren > 50){
      alert("Room size for your specifications not present in this class")
    }else{
      this.cost = (this.noOfAdults + this.noOfChildren/2)*800;
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
