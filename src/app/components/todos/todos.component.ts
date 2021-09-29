import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


   // accessing the form inputs
   @ViewChild('f') searchForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  addNewTodo() {
    console.log('testing');
  }

}
