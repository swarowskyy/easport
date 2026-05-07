import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngFor e [ngClass]
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { TimeService } from './services/time';
import { Time } from '../models/time.model';


@Component({
  selector: 'app-root',
  standalone: true, // AQUI está a mágica
  imports: [CommonModule, FormsModule], // Importamos os módulos necessários aqui
  templateUrl: './app.html',
})
export class App implements OnInit {
  times: Time[] = [];
  novoTime = { nome: '', jogo: '' };

  constructor(private timeService: TimeService) {}

  ngOnInit() { this.atualizarLista(); }

  atualizarLista() {
    this.timeService.listar().subscribe(res => this.times = res);
  }

  adicionar() {
    this.timeService.criar(this.novoTime).subscribe(() => {
      this.atualizarLista();
      this.novoTime = { nome: '', jogo: '' };
    });
  }

  vitoria(id: number) {
    this.timeService.registrarVitoria(id).subscribe(() => this.atualizarLista());
  }

  remover(id: number) {
    this.timeService.excluir(id).subscribe(() => this.atualizarLista());
  }
}