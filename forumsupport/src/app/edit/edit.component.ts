import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  answertext: string;

  constructor() { }

  pushMe() {
    console.log( "TextAreaComponent::answertext: " + this.answertext);
  }

  ngOnInit() {
  }

}
