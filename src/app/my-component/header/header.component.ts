import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  items = [{
    name : "TV",
    price : "50000",
    quantity : "10",
    status : "Available"
  },
{
    name : "Laptop",
    price : "35000",
    quantity : "0",
    status : "Out of Stock"
}]

  users = [];
  mypro:boolean = true;
  mystyle1:string = "15px";

  selectedProduct:string = "";
  getProductVal(event)
  {
    console.log(event.target.value);
    this.selectedProduct = event.target.value;
  }
  onButtonClick(uname,password)
  {
    this.users.push({
      name:uname.value,
      pass:password.value
    })

    if(this.users.length>2)
    {
      this.route.navigate(['technology']);
    }
    
  }
  onButtonRemove(uname,password)
  {
    this.users.splice(this.users.length - 1)
  }
  onRemove(item)
  {
    this.users.splice(item, 1)
  }
}
