import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { PagErroComponent } from './pag-erro/pag-erro.component';
import { GerenAulaComponent } from './geren-aula/geren-aula.component';

const Rotas: Routes = [
  {path: '', component: ListaCursosComponent},
  {path:'cadastrar/curso', component: FormCursoComponent},
  {path:'**', component: PagErroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    FormCursoComponent,
    FormCursoComponent,
    PagErroComponent,
    GerenAulaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(Rotas)
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
