import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  click1 = false;
  click2= false;
  click3=false;
  searched=false;
  studentsHeights: any;
  img: any;
  student:any;
  students = [
    {"name":"Bob","height":"1","author":"bob","keywords":"This aint Bob", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/dhru.jpg"},
    {"name":"NotBob","height":"2500","author":"bob","keywords":"Also not Bob", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/pluto.jpg"},
    {"name":"Mars","height":"4","author":"alice","keywords":"", "picture":""},
    {"name":"Curly","height":"4550","author":"moon","keywords":"Curly is teaching classes", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/curly.png"},
    {"name":"Moon","height":"1800","author":"","keywords":"", "picture":""},
    {"name":"Steve","height":"","author":"steve","keywords":"The moon wow the moon", "picture":""},
    {"name":"Moe","height":"12000","author":"","keywords":"Moe is a very smart person", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/moe.jpg"},
    {"name":"Chip","height":"88","author":"alice","keywords":"Injected chips", "picture":"https://webappsbm.blob.core.windows.net/webappsbm/chip.jpg"},
    {"name":"Zelda","height":"","author":"","keywords":"Who is Zelda", "picture":""}

    
  ];
  salariedpeople:any;

  constructor() { }

  ngOnInit(): void {
  }

  displayPersons(){
    this.click1=true;
    this.click2=false;
    this.click3=false;

  }
  selectHeights(){
    this.click1=false;
    this.click2=true;
    this.click3=false;

  }
  editKeywords(){
    this.click1=false;
    this.click2=false;
    this.click3=true;
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

  rangeofheights(){
    const h1 = document.getElementById('height1') as HTMLInputElement;    
    const h2 = document.getElementById('height2') as HTMLInputElement;
    this.studentsHeights = [];
    var temp = [];
    console.log("huehuhfu")
    for(var i=0;i<this.students.length;i++){
      console.log(h1.value,this.students[i].height, h2.value )
      if(parseInt(this.students[i].height)>=parseInt(h1.value) && parseInt(this.students[i].height)<=parseInt(h2.value)){
        temp.push(this.students[i]);
        console.log("jfjrivhr")
      }
    }
    this.studentsHeights = temp;
  }

}
