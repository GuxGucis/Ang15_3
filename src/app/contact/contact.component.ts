import { Component } from '@angular/core';
interface ContactForm
{
  "name": string;
  "checkAdult": boolean;
  "departament": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  mContactForm = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: ''
  }

  onSubmit(values: any):void{

    console.log("Form data-->", values)

  }

  // onSubmit(form: NgForm):void{

  //   console.log("Form data-->", form)

  // }
  //Otro forma de hacerlo es enviando el contactForm entero y no solo los .value. DOnde hay mucha mas información
  //Como por ejemplo si es valid, que dice si es valido el formulario, y podria ser interesante antes de enviarlo.

}
