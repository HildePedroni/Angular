import { SerieComponent } from './../serie/serie.component';
import { Component, OnChanges, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css'],

})
export class TreinoComponent {

  //Tera um array de série component
  //Percorrera esse array para exibir na planilha os dados.

  @Input()
  tipoTreino: string;
  metragemTotal: number = 0;

  series: SerieComponent[] = [];



  adicionaSerie(serie: SerieComponent) {
    var reps = serie.repsSerie;
    this.metragemTotal += (reps * serie.metragemTotalSerie);
    this.series.push(serie);
  }


}
