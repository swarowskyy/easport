/**
 * ============================================================
 * SERVICE DE TIMES
 * ============================================================
 * 
 * Este arquivo contém toda a lógica de negócio
 * relacionada aos times.
 * 
 * O Service é responsável por:
 * ------------------------------------------------------------
 * - armazenar os dados
 * - criar novos times
 * - listar os times
 * - adicionar vitórias
 * - remover times
 * - validar regras do sistema
 * 
 * No NestJS:
 * ------------------------------------------------------------
 * Controller -> recebe requisição
 * Service    -> processa a lógica
 * 
 * O controller NÃO deve conter regras de negócio.
 * Tudo fica centralizado no service.
 * 
 * ============================================================
 */




// Importa decorators e exceções do NestJS
import { Injectable, NotFoundException } from '@nestjs/common';




// Importa a entidade Time
// Ela representa a estrutura do objeto time
import { Time } from './entities/time.entity';




// Define esta classe como um provider/service
// permitindo injeção automática pelo NestJS
@Injectable()
export class TimesService {




  /**
   * ============================================================
   * ARRAY DE TIMES
   * ============================================================
   * 
   * Simula um banco de dados em memória.
   * 
   * private:
   * acessível apenas dentro da classe
   * 
   * Time[]:
   * significa um array do tipo Time
   */
  private times: Time[] = [];




  /**
   * ============================================================
   * LISTAR TODOS OS TIMES
   * ============================================================
   * 
   * Objetivo:
   * Retornar todos os times cadastrados.
   */
  findAll() {

    /**
     * map():
     * percorre todos os itens do array
     * criando um novo array.
     * 
     * { ...t }:
     * cria uma cópia do objeto.
     * 
     * rank: t.rank
     * força o retorno do rank atualizado.
     */
    return this.times.map(t => ({ ...t, rank: t.rank }));
  }




  /**
   * ============================================================
   * CRIAR TIME
   * ============================================================
   * 
   * Objetivo:
   * Criar e adicionar um novo time no array.
   * 
   * Partial<Time>:
   * permite receber apenas parte dos dados
   * da entidade Time.
   */
  create(dados: Partial<Time>) {

    /**
     * Date.now()
     * gera um número baseado no horário atual.
     * 
     * Aqui usamos como ID único.
     */
    const idGerado = Date.now();




    /**
     * Cria uma nova instância da classe Time
     * usando o construtor da entidade.
     * 
     * ...dados:
     * espalha os dados recebidos.
     * 
     * id: idGerado
     * adiciona o ID automaticamente.
     */
    const novoTime = new Time({ ...dados, id: idGerado });
    



    /**
     * push():
     * adiciona o novo time no array.
     */
    this.times.push(novoTime);




    /**
     * Retorna o time criado.
     */
    return novoTime;
  }




  /**
   * ============================================================
   * ADICIONAR VITÓRIA
   * ============================================================
   * 
   * Objetivo:
   * Encontrar um time pelo ID
   * e adicionar uma vitória.
   */
  adicionarVitoria(id: number) {

    /**
     * find():
     * procura o primeiro item que satisfaça
     * a condição.
     * 
     * t.id === id:
     * verifica se o ID do time é igual
     * ao ID recebido.
     */
    const time = this.times.find(t => t.id === id);




    /**
     * Se não encontrar o time:
     * lança uma exceção HTTP 404.
     */
    if (!time) throw new NotFoundException('Time não encontrado');




    /**
     * Incrementa as vitórias.
     * 
     * ++:
     * soma +1.
     */
    time.vitorias++;




    /**
     * Retorna o time atualizado.
     * 
     * rank: time.rank
     * recalcula o ranking automaticamente.
     */
    return { ...time, rank: time.rank };
  }




  /**
   * ============================================================
   * REMOVER TIME
   * ============================================================
   * 
   * Objetivo:
   * Remover um time pelo ID.
   */
  remover(id: number) {

    /**
     * findIndex():
     * retorna a posição do item no array.
     * 
     * Se não encontrar:
     * retorna -1.
     */
    const index = this.times.findIndex(t => t.id === id);




    /**
     * Validação:
     * verifica se o índice é inválido.
     */
    if (index === -1) {
      throw new NotFoundException('Time não encontrado');
    }




    /**
     * splice():
     * remove itens do array.
     * 
     * index:
     * posição inicial.
     * 
     * 1:
     * quantidade de itens removidos.
     */
    this.times.splice(index, 1);




    /**
     * Retorna mensagem de sucesso.
     */
    return { mensagem: 'Time removido com sucesso' };
  }
}