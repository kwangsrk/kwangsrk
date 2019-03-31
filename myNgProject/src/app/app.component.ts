import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 productlist=[{
   pID : "0001",
   pName : "แปรงสีฟัน",
   pCost : 200,
   img : "../assets/img/2.jpg"
 },{
   pID: "0002",
   pName :"แก้วน้ำ",
   pCost : 10,
   img : "../assets/img/2.jpg"
 },{
   pID : "0003",
   pName : "ยาสีฟัน",
   pCost : 20 
 }];
  
  selectedProduct:any;
    selectProduct(p){
    this.selectedProduct = p;
    console.log(p);

  }
  constructor() {
    
    }
  }
