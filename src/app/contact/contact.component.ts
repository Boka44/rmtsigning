import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.submitted = false;
    this.contactError = false;
    this.isEmailInvalid = false;
    this.isOther = false;
  }

  form = {
    name: "",
    email: "",
    phone: "",
    noDocs: "",
    typeOfNot: "",
    dateOfNot: "",
    typeOfDoc: "",
    other: ""
  };
  submitted = false;
  contactError = false;
  isEmailInvalid = false;
  isOther = false;

  onChange(value) {
    if (value == "other") {
      this.isOther = true;
    } else {
      this.isOther = false;
    }
  }

  formSubmit() {
    if(!this.validateEmail(this.form.email)) {
      this.isEmailInvalid = true;
      return;
    }
    console.log(this.form)

    let message = `The inforamtion is as follows: \n  Name: ${this.form.name} \n Email: ${this.form.email}`;
    message += `\n Phone: ${this.form.phone} \n Type of Document: ${this.form.typeOfDoc}`;
    message += `\n Number of Documents: ${this.form.noDocs} \n Type of Notarization: ${this.form.typeOfNot}`;
    if(this.isOther) {
      message += `\n Other: ${this.form.other}`;
    }
    message += `\n Date Notarization Needed: ${this.form.dateOfNot}`;
    message += `\n\n\n Praise be! \n-- Reverend Boka Hrboka`;
    
    
    this._contactService.sendContactForm(this.form)
      .subscribe((result: any) => {
        if(result.status == 422) {
          this.isEmailInvalid = true
          return;
        }
        if(result.success == true) {
          // this._googleAnalyticsService.eventEmitter("contact_form_submission", "new_lead", 'contact_page');
          this.submitted = true;
          this.contactError = false;
          this.isEmailInvalid = false;
        } else {
          this.contactError = true;
        }
      })
  };

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
