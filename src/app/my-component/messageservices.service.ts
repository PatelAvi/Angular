import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageservicesService {

  constructor() { }

  messagealert(){
    alert("This Technology print in Alert");
  }
}
