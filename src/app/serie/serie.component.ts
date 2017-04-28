import { ExercicioComponent } from './../exercicio/exercicio.component';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {

  @Input()
  repsSerie: number = 1;
  @Input()
  exercicios: ExercicioComponent[] = [];
  metragemTotalSerie: number = 0;


  adicionaExercicio(exercicio: ExercicioComponent) {
    var nrReps = exercicio.repeticoes;
    var metragemExercicio = exercicio.metragem;
    var totalExercicio = nrReps * metragemExercicio;
    this.metragemTotalSerie += totalExercicio;
    this.exercicios.push(exercicio);
  }




}
