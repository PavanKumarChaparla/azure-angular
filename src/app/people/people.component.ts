import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  img: any;
  click1=false;
  click2=false;
  click3=false;
  click4=false;
  click5=false;
  click6=false;
  click7 = false;
  searched=false;
  student:any;
  students = [
    {"name":"Dhruvi","salary":"99099","keywords":"dhruvi is nice", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/dhru.jpg"},
    {"name":"Chuck", "salary":"10000","keywords":"Chuck is amazing", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/chuck.jpg"},
    {"name":"Meena", "salary":"12500","keywords":"Meena is outta here", "picture":""},
    {"name":"Dave", "salary":"20","keywords":"Who is this", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/dave.jpg"},
    {"name":"Tuan", "salary":"","keywords":"Tuan is gone", "picture":""},
    {"name":"Tavo", "salary":"220200","keywords":"Tavo works very hard", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/tavo.jpg"},
    {"name":"Nora", "salary":"","keywords":"", "picture":""},
    {"name":"Sue", "salary":"12500","keywords":"Sue isn't Susan", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/upset.jpg"},
    {"name":"Susan", "salary":"255000","keywords":"Susan is very smart", "picture":""},
    {"name":"Darwin", "salary":"25","keywords":"Darwin is very creative", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/dar.jpg"}
  ];
  salariedpeople:any;
  constructor() { }

  ngOnInit(): void {

  }

  

  search(){
    const input = document.getElementById('name') as HTMLInputElement | null;
    console.log(input?.value);
    this.searched = true;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.searched = true;
        this.student = this.students[i];
        this.img = this.students[i].picture;
        console.log(this.img);
      }
    }
  }

  displayPersons(){
    this.click1 = true;
    this.click2 = false;
    this.click3 = false;
    this.click4 = false;
    this.click5 = false;
    this.click6 = false;
    this.click7 = false;
  }

  salaried(){
    this.click2 = true;
    this.click1 = false;
    this.click3 = false;
    this.click4 = false;
    this.click5 = false;
    this.click6 = false;
    this.click7 = false;
    var temp = [];
    for(var i=0;i<this.students.length;i++){
      if(parseInt(this.students[i].salary)<99000){
        temp.push(this.students[i]);
      }
    }
    this.salariedpeople = temp;
  }

  addPicture(){
    this.click3 = true;
    this.click2 = false;
    this.click1 = false;
    this.click4 = false;
    this.click5 = false;
    this.click6 = false;
    this.click7 = false;

  }

  removePicture(){
    this.click4 = true;
    this.click2 = false;
    this.click3 = false;
    this.click1 = false;
    this.click5 = false;
    this.click6 = false;
    this.click7 = false;
  }

  editKeywords(){
    this.click5 = true;
    this.click4 = false;
    this.click2 = false;
    this.click3 = false;
    this.click1 = false;
    this.click6 = false;
    this.click7 = false;
  }

  editSalaries(){
    this.click6 = true;
    this.click4 = false;
    this.click2 = false;
    this.click3 = false;
    this.click1 = false;
    this.click5 = false;
    this.click7 = false;
  }

  displayAll(){
    this.click6 = false;
    this.click4 = false;
    this.click2 = false;
    this.click3 = false;
    this.click1 = false;
    this.click5 = false;
    this.click7 = true;
  }

  onFileChanged(event:any) {
    const file = event.target.files[0];
    const input = document.getElementById('nameForPicture') as HTMLInputElement | null;
    for(var i=0;i<this.students.length;i++){
      console.log(this.students[i].name,input?.value);
      if(input?.value == this.students[i].name){
        this.students[i].name = input.value;
        this.students[i].picture = "../../assets/"+file.name;
      }
    }
  }

  changePicture(){
    alert("Picture Changed Succesfully");

  }

  delete(){
    const input = document.getElementById('name2') as HTMLInputElement | null;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.students[i].picture = "";
        console.log(this.img);
        alert("Picture Removed Succesfully");
      }
    }
  }

  editKeyword(){
    const input = document.getElementById('name3') as HTMLInputElement | null;
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.students[i].keywords = keyword.value;
        alert("Keyword Changed Succesfully");
      }
    }
  }

  editSalary(){
    const input = document.getElementById('name3') as HTMLInputElement | null;
    const salary = document.getElementById('salary') as HTMLInputElement;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.students[i].salary = salary.value;
        alert("Salary Changed Succesfully");
      }
    }
  }

  eventClick(student:any){
    this.click1=true;
    for(var i=0;i<this.students.length;i++){
      if(student.name == this.students[i].name){
        this.img = student.picture;
        console.log(this.img);
       
      }
    }
  }

}
