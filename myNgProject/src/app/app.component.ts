import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  request = {
    key1: 50,
    key2: 10
  }
  
  result: number=null;
  UserDetail:any={
    id:"",
    name:""
  }
  noteDetail:any=[];
  constructor(private service: CommonServiceService) {
    //this.getData();
    this.getUserDetail();
  }
  
  getData() {
    console.log(this.request);

    this.service.getData(this.request).subscribe((response: any) => {
      console.log(response);
      this.result = response.result;
    });
  }
  studentID = "5721602287";
  getUserDetail(){
    let request = {
      id: this.studentID
    }
    this.service.getUserDetail(request).subscribe((response: any) => {
      console.log("response :",response);

      this.UserDetail=response.user[0]
      this.noteDetail=response.noteDetail[0].note_type
      console.log(this.UserDetail,this.noteDetail);
    });
  }
  errorMsg="";
  updateNoteName(){

    let request={
    id : this.UserDetail.id,
    noteId:Number(this.editNoteDetail.note_id),
    name:this.editNoteDetail.name
  }
  this.service.updateNoteName(request).subscribe((response:any)=> {
    if(response.success){
      this.errorMsg="แก้ไขสำเร็จ"
      this.getUserDetail();
    }
    else{
      this.errorMsg="แก้ไขไม่สำเร็จ"
    }
    setTimeout(() => {
      this.errorMsg=""
    }, 2000);
  })
  }
  editNoteDetail:any={
    note_id:"",
    name:""
  }
  listDetail:any=[];
  selectNote(list){
    this.listDetail=JSON.parse(
      JSON.stringify(list)) 
    }
  editNote(note){
    console.log(note);
    this.editNoteDetail = JSON.parse(
      JSON.stringify(note)) ;
  }
  }


