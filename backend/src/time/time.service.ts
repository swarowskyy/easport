import { Injectable, NotFoundException } from '@nestjs/common';
import { Time } from './entities/time.entity';

@Injectable()
export class TimesService {
  private times: Time[] = [];

  findAll() {
    // Retornamos os objetos e garantimos que o rank seja calculado
    return this.times.map(t => ({ ...t, rank: t.rank }));
  }

  create(dados: Partial<Time>) {
    const idGerado = Date.now();
    // Instanciando a classe usando o seu construtor
    const novoTime = new Time({ ...dados, id: idGerado });
    
    this.times.push(novoTime);
    return novoTime;
  }

  adicionarVitoria(id: number) {
    const time = this.times.find(t => t.id === id);
    if (!time) throw new NotFoundException('Time não encontrado');
    
    time.vitorias++;
    return { ...time, rank: time.rank };
  }

  remover(id: number) {
    const index = this.times.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException('Time não encontrado');
    
    this.times.splice(index, 1);
    return { mensagem: 'Time removido com sucesso' };
  }
}