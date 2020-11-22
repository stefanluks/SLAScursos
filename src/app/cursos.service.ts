import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listaDeCursos() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  
  salvar(curso: Curso){
    if(curso.id){
      return this.http.patch('http://localhost:3000/Curso/' + curso.id + '/',
      {titulo: curso.titulo, descricao: curso.descricao, professor: curso.professor, categoria: curso.categoria});
    }else{
      return this.http.post('http://localhost:3000/Curso/',
      {titulo: curso.titulo, descricao: curso.descricao, professor: curso.professor, categoria: curso.categoria});
    }
  }

  excluir(curso: number | Curso) {
    let c = null;
    if (typeof (curso) == 'number') {
      c = curso;
    }
    else {
      c = curso.id;
      console.log(c);
    }
    return this.http.delete('http://localhost:3000/Curso/' + c );
  }

  listar(){
    return this.http.get('http://localhost:3000/Curso')
  }
}
