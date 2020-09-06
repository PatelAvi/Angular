import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageservicesService } from '../messageservices.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClick()
  {
    const alert = new MessageservicesService();
    alert.messagealert();
  }
}
