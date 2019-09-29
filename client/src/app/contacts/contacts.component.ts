import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../Contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;
  ContactService: any;
  contactService: any;

  constructor(privatecontactservice: ContactsService) { }

  addContact()
  {
    const newContact ={
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(this.contact);
    });
  }
  



  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data =>{
       if(data.n==1)
       {
         for(var i =0; i<this.contacts.length;i++){
           if(contacts[i].id == id)
           {
             this.contacts.splice(i,1);
           }
         }
       }
    })
  }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts =>
      this.contacts = contacts);
  }

}
    