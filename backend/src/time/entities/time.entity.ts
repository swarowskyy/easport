export class Time {
  id: string;
  nome: string;
  jogo: string;
  vitorias: number;
  treinador: string;
  pais: string;

  constructor(dados?: Partial<Time>) {
    this.id = dados?.id || '';
    this.nome = dados?.nome || '';
    this.jogo = dados?.jogo || '';
    this.vitorias = dados?.vitorias || 0;
    this.treinador = dados?.treinador || 'Sem Treinador';
    this.pais = dados?.pais || 'Brasil';
  }

  // A lógica do rank fica aqui porque ela depende das vitórias de CADA time
  get rank(): string {
    if (this.vitorias < 5) return 'Bronze';
    if (this.vitorias <= 10) return 'Prata';
    return 'Ouro';
  }
}