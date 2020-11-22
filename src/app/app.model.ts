export class Exercicio{
    aula: Aula;
    aluno: Aluno;
    resposta: string;
};

export class Aula{
    id: number;
    titulo: String;
    duracao: String;
    curso: number

    constructor(titulo:string,duracao:string,curso:number){
        this.titulo=titulo;
        this.duracao=duracao;
        this.curso=curso;
    }
};

export class Aluno{
    id: number;
    CPF: String;
    nome: String;
    nascimento: String;
};

export class Curso{
    id: number;
    titulo: String;
    descricao: String;
    professor: String;
    categoria: String;

    constructor(cod:number,titulo:string,descricao:string,professor:string,categoria:string){
        this.id=cod;
        this.categoria=categoria;
        this.descricao=descricao;
        this.titulo=titulo;
    }
};

export class Matricula{
    cod: Number;
    aluno: Aluno;
    curso: Curso;
};

