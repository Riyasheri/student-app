import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"Riya","age":20,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
    {"name":"Nisha","age":30,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
    {"name":"Fahim","age":50,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
    {"name":"Ashwin","age":25,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
    {"name":"Jinto","age":23,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
    {"name":"Brino","age":24,"photo":"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"},
   ]
}
