import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

//ESTE ES UN TEMPLATE-DRIVEN FORM

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
export class ContactComponent implements OnInit {

  @ViewChild('contactForm') contactForm!: NgForm;

  id!: string;

  constructor(private readonly route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'] //Y asi recoges el (dinamicamente declarado en el routiing module)
    })
  }

  mContactForm = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: ''
  }

  onSubmit():void{

    console.log("Form data-->", this.contactForm)

  }

  // onSubmit(form: NgForm):void{

  //   console.log("Form data-->", form)

  // }
  //Otro forma de hacerlo es enviando el contactForm entero y no solo los .value. DOnde hay mucha mas información
  //Como por ejemplo si es valid, que dice si es valido el formulario, y podria ser interesante antes de enviarlo.

}
