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
    console.log('Dados que chegaram do Frontend:', dto);
  const novoTime = {
    id: crypto.randomUUID(),
    ...dto,
    vitorias: 0,
    rank: 'Bronze',
    treinador: dto.treinador || 'Sem Treinador' // <-- GARANTE O ARMAZENAMENTO

     id: Math.random().toString(36).substr(2, 9), // Gera um ID aleatório simples
    nome: dto.nome,
    jogo: dto.jogo,
    treinador: dto.treinador, // <--- O SEU NOVO CAMPO ENTRA AQUI!
    vitorias: 0,
    rank: 'Bronze'
  };
  }
}