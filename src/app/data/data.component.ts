import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayPicture = "https://webappsbm.blob.core.windows.net/webappsbm/IMG_E2260.JPG";
  click1 = false;
  click2= false;
  click3=false;
  click4=false;
  click5=false;
  click6 = false;
  searched=false;
  studentsHeights: any;
  img: any;
  student:any;
  searchedStudents:any;
  students = [
    {"name":"Car","number":"100","keywords":"Blue car", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/a.jpg"},
    {"name":"Zeb","number":"140","keywords":"", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/z.jpg"},
    {"name":"Mice","number":"","keywords":"Three blind mice", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/m.jpg"},
    {"name":"Student","number":"899","keywords":"Very good student", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/s.jpg"},
    {"name":"Prof","number":"999","keywords":"Bad teacher", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/t.jpg"},
    {"name":"Car2","number":"","keywords":"Great Car", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/q.jpg"},
    
  ];
  salariedpeople:any;

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.click1=false;
    this.click2=false;
    this.click3=false;
    this.click4=true;
    this.click5=false;
    this.click6 = false;

  }

  displayPersons(){
    this.click1=true;
    this.click2=false;
    this.click3=false;
    this.click4=false;
    this.click5=false;
    this.click6 = false;



  }
  selectHeights(){
    this.click1=false;
    this.click2=true;
    this.click3=false;
    this.click4=false;
    this.click5=false;
    this.click6 = false;


  }
  editKeywords(){
    this.click1=false;
    this.click2=false;
    this.click3=true;
    this.click4=false;
    this.click5=false;
    this.click6 = false;


  }

  addEntry(){
    this.click1=false;
    this.click2=false;
    this.click3=false;
    this.click4=false;
    this.click5=true;
    this.click6 = false;

  }

  deleteEntry(){
    this.click1=false;
    this.click2=false;
    this.click3=false;
    this.click4=false;
    this.click5=false;;
    this.click6 = true;
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

  searchForPerson(){
    const input = document.getElementById('search') as HTMLInputElement | null;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.searched = true;
        this.searchedStudents = this.students[i];
        this.img = this.students[i].picture;
        console.log(this.img);
      }
    }
  }

  addEntrySubmit(){
    const name = document.getElementById('nameAdded') as HTMLInputElement;    
    const number = document.getElementById('numberAdded') as HTMLInputElement;
    const keyword = document.getElementById('keywordAdded') as HTMLInputElement;
    var temp = this.students;
    var jsonObj = {
      "name":name.value,
      "number":number.value,
      "keywords":keyword.value,
      "picture":""
    };
    temp.push(jsonObj);
    this.students = temp;
    alert("Record Added Succesfully");

  }

  delete(){
    const input = document.getElementById('name2') as HTMLInputElement | null;
    for(var i=0;i<this.students.length;i++){
      if(input?.value == this.students[i].name){
        this.students.splice(i, 1);
      }
    }
    alert("Record Removed Succesfully");

  }

  rangeofheights(){
    const h1 = document.getElementById('height1') as HTMLInputElement;    
    const h2 = document.getElementById('height2') as HTMLInputElement;
    this.studentsHeights = [];
    var temp = [];
    console.log("huehuhfu")
    for(var i=0;i<this.students.length;i++){
      console.log(h1.value,this.students[i].number, h2.value )
      if(parseInt(this.students[i].number)>=parseInt(h1.value) && parseInt(this.students[i].number)<=parseInt(h2.value)){
        temp.push(this.students[i]);
        console.log("jfjrivhr")
      }
    }
    this.studentsHeights = temp;
  }

}
