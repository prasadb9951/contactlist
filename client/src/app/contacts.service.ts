import { Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
//import 'rxjs/add/operator/map';
//import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http) { }
//retriving contactservice

getcontacts()
{
  return this.http.get('http://localhost:3000/api/contacts')
  .map(res => res.json());
}
//add contact method

addcontact(newContact)
{
  var headers = new Headers();
  headers.append('Content-type','application/json');
  return this.http.post('http://localhost:3000/api/contacts', newContact,{headers:headers})
        .map(res => res.json());
}
//delete methode


  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contacts'+id)
    .map(res => res.json());
  }

}





