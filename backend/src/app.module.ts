/**
 * ============================================================
 * APP MODULE
 * ============================================================
 * 
 * Este arquivo representa o módulo principal
 * da aplicação NestJS.
 * 
 * O AppModule é o ponto central do sistema.
 * 
 * Ele é responsável por:
 * ------------------------------------------------------------
 * - carregar módulos
 * - registrar controllers
 * - registrar services
 * - organizar toda a aplicação
 * 
 * Todo projeto NestJS possui um módulo principal.
 * 
 * Estrutura:
 * ------------------------------------------------------------
 * AppModule
 *   ├── Controllers
 *   ├── Providers (Services)
 *   └── Imports (Outros módulos)
 * 
 * ============================================================
 */




// Importa o decorator Module do NestJS
// Ele transforma a classe em um módulo
import { Module } from '@nestjs/common';




// Importa o controller principal da aplicação
import { AppController } from './app.controller';




// Importa o service principal da aplicação
import { AppService } from './app.service';




// Importa o módulo de times
// responsável pelas funcionalidades dos times
import { TimeModule } from './time/time.module';




// Configuração do módulo principal
@Module({




  /**
   * ============================================================
   * IMPORTS
   * ============================================================
   * 
   * Aqui registramos outros módulos
   * que serão utilizados na aplicação.
   * 
   * TimeModule:
   * adiciona todas as funcionalidades
   * relacionadas aos times.
   * 
   * Isso inclui:
   * - controllers de times
   * - services de times
   * - regras de negócio dos times
   */
  imports: [TimeModule],




  /**
   * ============================================================
   * CONTROLLERS
   * ============================================================
   * 
   * Aqui registramos os controllers
   * que pertencem ao AppModule.
   * 
   * Controllers:
   * - recebem requisições HTTP
   * - definem rotas
   * - retornam respostas
   */
  controllers: [AppController],




  /**
   * ============================================================
   * PROVIDERS
   * ============================================================
   * 
   * Aqui registramos os providers/services
   * disponíveis dentro do módulo.
   * 
   * Providers:
   * - contêm regras de negócio
   * - podem ser injetados automaticamente
   * - compartilham lógica da aplicação
   */
  providers: [AppService],
})




/**
 * ============================================================
 * CLASSE PRINCIPAL DO MÓDULO
 * ============================================================
 * 
 * Esta classe representa oficialmente
 * o módulo raiz da aplicação.
 * 
 * O NestJS usa esta classe para:
 * ------------------------------------------------------------
 * - iniciar a aplicação
 * - carregar módulos
 * - conectar controllers
 * - conectar services
 * - organizar dependências
 * 
 * Mesmo sem código interno,
 * ela é obrigatória no NestJS.
 * 
 * ============================================================
 */
export class AppModule {}