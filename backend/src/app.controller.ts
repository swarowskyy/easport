/**
 * ============================================================
 * APP CONTROLLER
 * ============================================================
 * 
 * Este arquivo representa o controller principal
 * da aplicação NestJS.
 * 
 * O Controller é responsável por:
 * ------------------------------------------------------------
 * - receber requisições HTTP
 * - definir rotas da API
 * - chamar os services
 * - retornar respostas ao frontend
 * 
 * Neste caso:
 * ------------------------------------------------------------
 * Este controller possui apenas uma rota:
 * 
 * GET /
 * 
 * Ela retorna uma mensagem simples da aplicação.
 * 
 * Fluxo:
 * ------------------------------------------------------------
 * Navegador -> Controller -> Service -> Resposta
 * 
 * ============================================================
 */




// Importa decorators do NestJS
import { Controller, Get } from '@nestjs/common';




// Importa o AppService
// responsável pela lógica da aplicação
import { AppService } from './app.service';




// Define esta classe como um controller
@Controller()
export class AppController {




  /**
   * ============================================================
   * CONSTRUTOR
   * ============================================================
   * 
   * Injeta automaticamente o AppService
   * usando o sistema de Dependency Injection
   * do NestJS.
   * 
   * private:
   * acessível apenas dentro da classe
   * 
   * readonly:
   * impede alteração após criação
   */
  constructor(private readonly appService: AppService) {}




  /**
   * ============================================================
   * ROTA PRINCIPAL
   * ============================================================
   * 
   * @Get()
   * define uma rota HTTP GET.
   * 
   * Como o @Controller() não possui rota base,
   * esta rota será:
   * 
   * GET /
   * 
   * Objetivo:
   * retornar uma mensagem simples
   * da aplicação.
   */
  @Get()
  getHello(): string {

    /**
     * Chama o método getHello()
     * do AppService.
     * 
     * O retorno será uma string.
     */
    return this.appService.getHello();
  }
}