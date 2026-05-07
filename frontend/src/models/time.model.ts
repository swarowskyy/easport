export interface Time {
  id: number;
  nome: string;
  jogo: string;
  vitorias: number;
  rank?: string; // O '?' indica que é opcional, pois vem do backend
}