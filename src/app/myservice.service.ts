import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  _massage="Saluat grocene, Bonjour fille et Chest un chat at un chavel"

  constructor() {}

  getmassage(){
    return this._massage
  }
}
