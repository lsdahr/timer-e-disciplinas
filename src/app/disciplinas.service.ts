import { Injectable } from "@angular/core";

interface Disciplina {
  title: string;
}

@Injectable()
export class DisciplinasService {
  lista: Array<Disciplina> = [];
  disciplina: Array<string> = [
    "IDS002 - Desenvolvimento para Servidores II",
    "ISW011 - Projeto de Prototipagem e Testes de Usabilidade",
    "ISW012 - Desenvolvimento para Dispositivos Móveis I",
    "ITE004 - Tópicos Especiais em Sistemas para Internet II",
    "TES006 - Estágio Supervisionado em Sistemas para Internet",
    "TTG401 - Projeto de Trabalho de Graduação em Sistemas para Internet I"
  ];

  constructor() {}

  getDisciplina() {
    return this.disciplina;
  }

  removeDisciplina(index: number) {
    this.disciplina.splice(index, 1);
  }

  getLista() {
    return this.lista;
  }

  add(title: string) {
    this.lista.push({ title });
  }

  remove(index: number) {
    this.lista.splice(index, 1);
  }
}
