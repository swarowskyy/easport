/**
 * ============================================================
 * MÓDULO DE TIMES
 * ============================================================
 * 
 * Este arquivo define o módulo responsável pela área
 * de gerenciamento de times dentro da aplicação.
 * 
 * No NestJS, um módulo serve para organizar partes
 * da aplicação em blocos separados.
 * 
 * O módulo conecta:
 * ------------------------------------------------------------
 * - Controllers  -> recebem requisições HTTP
 * - Services     -> contêm regras de negócio
 * - Providers    -> serviços disponíveis no sistema
 * 
 * Neste caso:
 * ------------------------------------------------------------
 * TimeModule controla toda a estrutura relacionada
 * aos times do sistema.
 * 
 * Fluxo:
 * Frontend -> Controller -> Service -> Dados
 * 
 * ============================================================
 */




// Importa o decorator Module do NestJS
// Ele transforma a classe em um módulo oficial
import { Module } from '@nestjs/common';




// Importa o service responsável pelas regras de negócio
// relacionadas aos times
import { TimesService } from './time.service';




// Importa o controller responsável pelas rotas HTTP
// dos times
import { TimesController } from './time.controller';




// Define a configuração do módulo
@Module({




  /**
   * ============================================================
   * CONTROLLERS
   * ============================================================
   * 
   * Aqui registramos os controllers do módulo.
   * 
   * Controllers:
   * - recebem requisições HTTP
   * - criam rotas da API
   * - chamam os services
   * 
   * Neste caso:
   * TimesController controla as rotas:
   * 
   * GET /times
   * POST /times
   * PATCH /times/:id/vitoria
   * DELETE /times/:id
   */
  controllers: [TimesController],




  /**
   * ============================================================
   * PROVIDERS
   * ============================================================
   * 
   * Providers são classes que podem ser injetadas
   * automaticamente pelo NestJS.
   * 
   * Aqui registramos os services utilizados
   * pelo módulo.
   * 
   * Neste caso:
   * TimesService contém:
   * - regras de negócio
   * - manipulação dos dados
   * - lógica das vitórias
   * - criação e remoção de times
   */
  providers: [TimesService],
})




/**
 * ============================================================
 * CLASSE DO MÓDULO
 * ============================================================
 * 
 * Esta classe representa oficialmente o módulo
 * de times da aplicação.
 * 
 * O NestJS usa essa classe para:
 * - carregar controllers
 * - carregar services
 * - organizar dependências
 * - estruturar o sistema
 * 
 * Mesmo vazia, ela é necessária.
 * 
 * ============================================================
 */
export class TimeModule {}