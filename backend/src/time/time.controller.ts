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




  /**
   * Construtor da classe
   * 
   * Injeta automaticamente o TimesService
   * usando o sistema de Dependency Injection do NestJS.
   * 
   * "private readonly" faz:
   * - private  -> acessível apenas dentro da classe
   * - readonly -> não pode ser alterado
   */
  constructor(private readonly timesService: TimesService) {}




  /**
   * ============================================================
   * LISTAR TIMES
   * ============================================================
   * 
   * ROTA:
   * GET /times
   * 
   * Objetivo:
   * Retorna todos os times cadastrados.
   */
  @Get()
  listar() {

    // Chama o método findAll() do service
    // para buscar todos os times
    return this.timesService.findAll();
  }




  /**
   * ============================================================
   * CRIAR TIME
   * ============================================================
   * 
   * ROTA:
   * POST /times
   * 
   * Objetivo:
   * Cria um novo time.
   * 
   * O @Body() captura os dados enviados
   * no corpo da requisição.
   */
  @Post()
  criar(@Body() dados: Partial<Time>) {

    // Envia os dados para o service criar o time
    return this.timesService.create(dados);
  }




  /**
   * ============================================================
   * ADICIONAR VITÓRIA
   * ============================================================
   * 
   * ROTA:
   * PATCH /times/:id/vitoria
   * 
   * Exemplo:
   * PATCH /times/1/vitoria
   * 
   * Objetivo:
   * Soma uma vitória ao time informado.
   * 
   * O @Param('id') pega o parâmetro da URL.
   */
  @Patch(':id/vitoria')
  vitoria(@Param('id') id: string) {

    // O "+" converte string para número
    // Exemplo:
    // "1" -> 1
    return this.timesService.adicionarVitoria(+id);
  }




  /**
   * ============================================================
   * REMOVER TIME
   * ============================================================
   * 
   * ROTA:
   * DELETE /times/:id
   * 
   * Exemplo:
   * DELETE /times/1
   * 
   * Objetivo:
   * Remove um time pelo ID.
   */
  @Delete(':id')
  remover(@Param('id') id: string) {

    // Converte o ID para número
    // e envia para o service remover
    return this.timesService.remover(+id);
  }
}