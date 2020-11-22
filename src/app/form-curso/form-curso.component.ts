import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Aula, Curso } from '../app.model';
import { AulasService } from '../aulas.service';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {
  titulo=null;
  descricao=null;
  professor=null;
  duracao=null;
  categoria='Tecnologia';
  listaDeCursos=null;
  editandoCurso: any;
  id: 1;
  //----------------
  addNoCurso=null;
  tituloAula=null;
  //-----------------
  aulas=null;

  constructor(private cursoService: CursosService, private aulasService: AulasService){
    this.atualizarLista();
  }  

  atualizarLista(){
    this.cursoService.listar().subscribe(dados=> { this.listaDeCursos = dados;});
    this.aulasService.listar().subscribe(dados=> {this.aulas = dados})
  }

  ngOnInit(): void {
  }

  pegarCategoria(resposta){
    this.categoria=resposta;
  }
  
  salvar(){
    var curso = new Curso(this.id,this.titulo,this.descricao,this.professor,this.categoria)
    this.cursoService.salvar(curso).subscribe((dados)=>{
      this.atualizarLista();
    },
    error=> console.log(error));
  this.titulo=null;
  this.descricao=null;
  this.editandoCurso = {id:0,titulo:'',descricao:'',professor:'',categoria:''}
  
  }
  Excluir(curso){
    if (confirm('deseja realmente excluir?')) {
      this.cursoService.excluir(curso).subscribe(
        dados=> this.atualizarLista(),
        erro=> console.log(erro)
      );
    }
  }

  addAula(curso){
    this.addNoCurso = curso;
    var div = document.querySelector("#addAula");
    div["hidden"]=false;
  }

  salvarAula(){
    let aula = new Aula(this.tituloAula,this.duracao,this.addNoCurso.id)
    this.aulasService.salvar(aula).subscribe((dados)=>{
      this.atualizarLista();
    },
    error=> console.log(error));
    this.tituloAula=null;
    this.duracao=null;
    this.addNoCurso = null;
    var div = document.querySelector("#addAula");
    div["hidden"]=true;
  }

  addAulaCancel(){
    this.addNoCurso=null;
    var div = document.querySelector("#addAula");
    div["hidden"]=true;
    this.duracao=null;
    this.tituloAula=null;
  }

}
