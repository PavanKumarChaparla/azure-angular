import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  img: any;
  clicked=false;
  students = [
    {"name":"Pavan Kumar Chaparla", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/IMG_E2260.JPG"},
    {"name":"Rakesh", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/IMG_E2367.JPG"}
  ];
  constructor() { }

  ngOnInit(): void {

  }

  eventClick(student:any){
    this.clicked=true;
    for(var i=0;i<this.students.length;i++){
      if(student.name == this.students[i].name){
        this.img = student.picture;
        console.log(this.img);
      }
    }
  }

}
