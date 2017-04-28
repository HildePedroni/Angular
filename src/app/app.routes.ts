import { CadastroTreinoComponent } from './cadastro-treino/cadastro-treino.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const appRoutes: Routes = [
    { path: 'cadastro', component: CadastroTreinoComponent },
    { path: '**', component: CadastroTreinoComponent }

];

export const routing = RouterModule.forRoot(appRoutes);