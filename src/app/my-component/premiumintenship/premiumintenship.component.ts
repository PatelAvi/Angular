import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiumintenship',
  templateUrl: './premiumintenship.component.html',
  styleUrls: ['./premiumintenship.component.css']
})
export class PremiumintenshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedTechnology : boolean =false;
  technologyselect : string;
  addedproduct : any;

  onSelectedProduct(technology)
  {
    this.selectedTechnology = true;
    this.technologyselect = technology;
  }
  ProductAdd(event){
    this.addedproduct = event
  }

}
