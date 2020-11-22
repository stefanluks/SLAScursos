import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aula } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  listaDeCursos() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  
  salvar(aula: Aula){
    if(aula.id){
      return this.http.patch('http://localhost:3000/Aula/' + aula.id + '/',
      {titulo: aula.titulo, duracao: aula.duracao,curso: aula.curso});
    }else{
      return this.http.post('http://localhost:3000/Aula/',
      {titulo: aula.titulo, duracao: aula.duracao, curso: aula.curso});
    }
  }

  excluir(aula: number | Aula) {
    let a = null;
    if (typeof (aula) == 'number') {
      a = aula;
    }
    else {
      a = aula.id;
      console.log(a);
    }
    return this.http.delete('http://localhost:3000/Aula/' + a );
  }

  listar(){
    return this.http.get('http://localhost:3000/Aula')
  }
}
