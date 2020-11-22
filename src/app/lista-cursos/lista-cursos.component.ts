import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  listaDeCursos=null;

  constructor(private cursoService: CursosService){
    this.atualizarLista();
  }  

  atualizarLista(){
    this.cursoService.listar().subscribe(dados=> { this.listaDeCursos = dados;});
  }

  ngOnInit(): void {
    
  }

  
  

}
