/**
 * ============================================================
 * ARQUIVO PRINCIPAL DA APLICAÇÃO (main.ts)
 * ============================================================
 * 
 * Este é o ponto de entrada da aplicação NestJS.
 * 
 * O arquivo main.ts é responsável por:
 * ------------------------------------------------------------
 * - iniciar o servidor
 * - criar a aplicação NestJS
 * - carregar o módulo principal
 * - configurar recursos globais
 * - definir a porta da aplicação
 * 
 * Fluxo da inicialização:
 * ------------------------------------------------------------
 * main.ts
 *    ↓
 * AppModule
 *    ↓
 * Controllers + Services
 *    ↓
 * Servidor HTTP iniciado
 * 
 * ============================================================
 */




// Importa o NestFactory
// responsável por criar a aplicação NestJS
import { NestFactory } from '@nestjs/core';
// Importa o módulo principal da aplicação
import { AppModule } from './app.module';
/**
 * ============================================================
 * FUNÇÃO BOOTSTRAP
 * ============================================================
 * 
 * bootstrap():
 * função principal responsável por iniciar
 * toda a aplicação.
 * 
 * async:
 * indica que a função trabalha com operações
 * assíncronas usando await.
 * 
 * O NestJS recomenda esse padrão
 * para inicialização do servidor.
 */
async function bootstrap() {
  /**
   * ============================================================
   * CRIAÇÃO DA APLICAÇÃO
   * ============================================================
   * 
   * NestFactory.create():
   * cria uma instância da aplicação NestJS.
   * 
   * AppModule:
   * módulo principal carregado no sistema.
   * 
   * await:
   * espera a aplicação ser criada.
   */
  const app = await NestFactory.create(AppModule);
  /**
   * ============================================================
   * HABILITAR CORS
   * ============================================================
   * 
   * enableCors():
   * permite requisições externas
   * de outros domínios.
   * 
   * Exemplo:
   * Angular -> localhost:4200
   * NestJS  -> localhost:3000
   * 
   * Sem CORS:
   * o navegador bloqueia a comunicação.
   */
  app.enableCors();
  /**
   * ============================================================
   * INICIAR SERVIDOR
   * ============================================================
   * 
   * listen():
   * inicia o servidor HTTP.
   * 
   * process.env.PORT:
   * usa a porta definida no ambiente.
   * 
   * ?? 3000:
   * caso não exista PORT,
   * usa a porta 3000 como padrão.
   * 
   * await:
   * espera o servidor iniciar.
   */
  await app.listen(process.env.PORT ?? 3000);
}
/**
 * ============================================================
 * EXECUTA A APLICAÇÃO
 * ============================================================
 * 
 * Chama a função bootstrap()
 * para iniciar o sistema.
 * 
 * Sem isso:
 * o servidor não seria iniciado.
 * 
 * ============================================================
 */
bootstrap();