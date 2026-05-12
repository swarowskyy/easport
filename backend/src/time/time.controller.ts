/**
 * ============================================================
 * CONTROLLER DE TIMES
 * ============================================================
 * 
 * Este arquivo é responsável por controlar as rotas da API
 * relacionadas aos times.
 * 
 * O controller recebe as requisições HTTP do frontend
 * e encaminha para o service, que contém as regras de negócio.
 * 
 * ROTAS DISPONÍVEIS:
 * ------------------------------------------------------------
 * GET    /times              -> Lista todos os times
 * POST   /times              -> Cria um novo time
 * PATCH  /times/:id/vitoria  -> Adiciona vitória ao time
 * DELETE /times/:id          -> Remove um time
 * 
 * Fluxo:
 * Frontend -> Controller -> Service -> Dados
 * 
 * ============================================================
 */




// Importa decorators do NestJS usados para criar rotas HTTP
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';




// Importa a entidade Time
// A entidade representa a estrutura dos dados do time
import { Time } from './entities/time.entity';




// Importa o service responsável pelas regras de negócio
// O service manipula os dados dos times
import { TimesService } from './time.service';




// Define que esta classe é um controller
// Todas as rotas começarão com "/times"
@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}
  @Get()
  listar() {
    return this.timesService.findAll();
  }

  @Post()
  criar(@Body() dados: Partial<Time>) {

    // Envia os dados para o service criar o time
    return this.timesService.create(dados);
  }

  @Patch(':id/vitoria')
  vitoria(@Param('id') id: string) {

    // O "+" converte string para número
    // Exemplo:
    // "1" -> 1
     console.log('Time criado com sucesso:', this.vitoria);
    return this.timesService.adicionarVitoria(+id);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {

    // Converte o ID para número
    // e envia para o service remover
    return this.timesService.remover(+id);
  }
}