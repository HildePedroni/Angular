import { Component, Input } from '@angular/core';

@Component({
  selector: 'exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent {

  @Input()
  metragem: number;
  @Input()
  descritivo: string;
  @Input()
  repeticoes: number;


}
