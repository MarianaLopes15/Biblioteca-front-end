import { Autores } from "./autor";

export interface Livros{

  id: number;
  titulo: string;
  anoLancamento: string;
  autores: Autores[];
}
