import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClienteComponent,TarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
