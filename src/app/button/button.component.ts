import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy{

  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string; //Si inspeccionas la web en la consola puedes ver como este va cambiando gracias al simplechanges

  ngOnChanges(changes: SimpleChanges): void {
    // El objeto SimpleChanges que traerá los cambios anteriores y los nuevos
    console.log('Changes ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit ->');
  }

  ngOnDestroy(): void {
    console.log('Destroy'); 
  }

}
