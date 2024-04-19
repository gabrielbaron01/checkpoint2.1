import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefas.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefas:Tarefa[] = [];
    tarefaForm: FormGroup = new FormGroup({})

  constructor(private tarefaService:TarefaService, private formBuilder:FormBuilder){
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['',Validators.required],
      dataValidade: ['', Validators.required]
    })
  }
  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  inserir(){
    if(this.tarefaForm.valid){
      const tarefaNova: Tarefa = {
        id: this.generateRandomString(6),
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        dataValidade: this.tarefaForm.value.dataValidade
      }
      this.tarefaForm.reset()
      this.tarefaService.adicionar(tarefaNova)
      alert('Nova tarefa adicionada com sucesso!')
    }else{
      alert('ERRO! Preencha os dados da maneira correta')
    }
  }

listar():void{
    this.tarefas = this.tarefaService.listar();
}

remover(id:string):void{
  this.tarefaService.remover(id)
  alert('Tarefa removida com sucesso!')
}

ngOnInit():void{
  this.listar();
}
}
