export class Time {
  id: number;
  nome: string;
  jogo: string;
  vitorias: number;
  treinador: string;
  pais:string;

  constructor(dados?: Partial<Time>) {
    this.id = dados?.id || 0;
    this.nome = dados?.nome || '';
    this.jogo = dados?.jogo || '';
    this.vitorias = dados?.vitorias || 0;
  }

  // Método para o Front-end saber o nível do time
  get rank(): string {
    if (this.vitorias < 4) return 'Bronze';
    if (this.vitorias <= 8) return 'Prata';
    return 'Ouro';
  }
  create(dto: any) {
  const novoTime = {
    id: crypto.randomUUID(),
    ...dto,
    vitorias: 0,
    rank: 'Bronze',
    treinador: dto.treinador || 'Sem Treinador' // <-- GARANTE O ARMAZENAMENTO
  };
  this.jogo.(novoTime);
  return novoTime;
}
}