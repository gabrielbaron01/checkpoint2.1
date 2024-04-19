import { Injectable } from '@angular/core';
import {Tarefa} from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor() { }

  //Esta lista virá da API
  tarefas:Tarefa[] = [
    {id:"da56s1d65",titulo: "Lavar louça", descricao: "Use detergente", dataValidade: new Date()},
    {id:"da56s1d65",titulo: "Almoçar", descricao: "Dieta Saudavel", dataValidade: new Date()}
  ];

  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
       const index = this.tarefas.indexOf(tarefa);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa);
  }
}
