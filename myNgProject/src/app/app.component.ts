import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';

  name: string = "Miss u na";
  score: number = 99;

  student = {
    name: "Kwang",
    studentID: "5921602795",
    weight: 51,
    height: 171
  }
  studentlist = [{
    name: "Kwang",
    studentID: "5921602795",
    weight: 51,
    height: 171
  },
  {
    name: "Kwang",
    studentID: "5921602795",
    weight: 47,
    height: 171
  },
  {
    name: "Kwang",
    studentID: "5921602795",
    weight: 80,
    height: 171
  }





  ]
  constructor() {
    this.studentlist.map((object, index) => {
       let obj:any =object;
         obj.bmi = object.weight/((object.height/100)*(object.height/100))
         return obj;
      let student = "student in function";
      console.log(this.studentlist);
      console.log(student);
    })
  }
}