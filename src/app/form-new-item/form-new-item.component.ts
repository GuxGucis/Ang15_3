import { Component, EventEmitter, Input, Output,ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements AfterViewInit{

  @ViewChild('newItem') newItem!: ElementRef;
  @ViewChild('updateItem') updateItem!: string;

  @Input() label!: string;
  @Input() selection!: City;
  @Input() className = 'btn-primary';

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  ngAfterViewInit(): void {

    //Hay que usar esta, porque si usamos el init como aun no esta martiarizada la vista en el Init hay que posicionarse despues
    this.newItem.nativeElement.value.focus();
    // console.log('this.newItem', this.newItem)
  }

  onAddNewItem(): void{

    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.Clear();

  }

  onUpdateItem(): void{

    const city: City = {
      _id: this.selection._id, //Tiene mas sentido que lo de antes que era item._id, porque es era porque lo teniamos puesto de que llegaba del html y en verdad llega por aqui
      name: this.newItem.nativeElement.value
    }

    this.updateItemEvent.emit(city);
    this.Clear();

  }

  private Clear(): void{
    this.newItem.nativeElement.value = ''
  }

}
