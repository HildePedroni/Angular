import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreinoComponent } from './treino/treino.component';
import { SerieComponent } from './serie/serie.component';
import { ExercicioComponent } from './exercicio/exercicio.component';
import { CadastroTreinoComponent } from './cadastro-treino/cadastro-treino.component';

@NgModule({
  declarations: [
    AppComponent,
    TreinoComponent,
    SerieComponent,
    ExercicioComponent,
    CadastroTreinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
