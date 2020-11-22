import { Component } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id=0;
  listaDeCursos: any = null;
  titulo=null;
  descricao=null;
  categoria=null;
  professor=null;
  Aulas=[];
  editandoCurso={id:0, titulo:'',descricao:'',professor:'',categoria:''};


  constructor(private cursoService: CursosService){
    this.atualizarLista();
  }  

  atualizarLista(){
    this.cursoService.listar().subscribe(dados=> { this.listaDeCursos = dados;});
  }

  
  cancelar(){
    
  }
  
}
