import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];
  selectedCity$ = this.dataSvc.selectedCity$ //Y ya podriamos usarlo en este otro componente

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute,
    private readonly dataSvc: DataService) {  }

  ngOnInit(): void {

    this.departments = this.route.snapshot.data['departments'];

    this.route.queryParams.subscribe((params: Params) => {
        this.name = params['name']; //Para recoger lo que pusimos en el name, la query en el navabar
      });

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
