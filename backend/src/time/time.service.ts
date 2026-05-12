import { Injectable } from '@nestjs/common';
import { Time } from './entities/time.entity'; // Importa o molde acima

@Injectable()
export class TeamsService {
  // AQUI está a lista onde os times são guardados
  private times: Time[] = []; 

  create(dto: any) {
    // Criamos um novo objeto baseado no molde 'Time'
    const novoTime = new Time({
      ...dto,
      id: crypto.randomUUID(), // Gera o id único
      vitorias: 0 
    });

  
    this.times.push(novoTime); 
    
    console.log('Time criado com sucesso:', novoTime);
    return novoTime;
  }

  findAll() {
    return this.times;
  }
}