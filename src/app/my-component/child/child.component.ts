import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() selectedTechnology : boolean = false;
  @Input() technologyselect : string;
  @Output() addedproduct = new EventEmitter<any>();

  onAddClick()
  {
    this.addedproduct.emit(this.technologyselect);
    
  }
}
