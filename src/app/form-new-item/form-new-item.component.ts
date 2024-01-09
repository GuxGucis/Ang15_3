import { Component, EventEmitter, Input, Output,ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {

  @Input() label!: string;
  @Input() selection!: City;
  @Input() className = 'btn-primary';

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void{

    console.log("New Item ->", item)
    this.newItemEvent.emit(item)

  }

}
