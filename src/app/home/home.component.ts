import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
 }

  ngOnInit() {


  }
  showModal(){
    $('.large.modal').transition('slide right').modal('show');
    $('.icon.button')
      .popup({
      on: 'click'
    });
  }

}
