import { ExercicioComponent } from './../exercicio/exercicio.component';
import { TreinoComponent } from './../treino/treino.component';
import { SerieComponent } from './../serie/serie.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-treino',
  templateUrl: './cadastro-treino.component.html',
  styleUrls: ['./cadastro-treino.component.css']
})
export class CadastroTreinoComponent {


  @ViewChild(TreinoComponent)
  treino: TreinoComponent = new TreinoComponent();;

  @ViewChild(SerieComponent)
  serie: SerieComponent = new SerieComponent();;

  exercicio: ExercicioComponent = new ExercicioComponent();;


  adicionaExercicio() {
    this.serie.adicionaExercicio(this.exercicio);
    this.exercicio = new ExercicioComponent();
  }


  adicionaSerieNoTreino() {
    this.treino.adicionaSerie(this.serie);
    // this.serie.exercicios = [];
    // this.serie.metragemTotalSerie = 0;
    // this.serie.repsSerie = 1;
    this.serie = new SerieComponent();


  }


  cadastrar(event) {
    event.preventDefault();
    console.log("Tentando salvar o treino.");
    //TODO percorrer array de series montando o componente treino para ser enviado para o firebase

  }



}
