import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  //Mirar el la diferencia de this.contactForm.patchValue() y this.contactForm.setValue() (Parece queda dolores de cabeza)
  //Irian por ejemplo en dos metodos separados que habria que invializar en el ngOnInit()
  //Video largo de formularios reactivos 
  //https://www.youtube.com/watch?v=jJuE7-9T6Ss&ab_channel=DominiCode

  onSubmit(): void{

    console.log("Reactive form ->", this.contactForm.value)

  }

  initForm(): FormGroup{

    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]], // Son en orden [<Valor por defecto>, <Validador o validadores>]
      checkAdult:[false, [Validators.required]],
      deparment:[''],
      comment:['', [Validators.required]]
    })

  }

}
