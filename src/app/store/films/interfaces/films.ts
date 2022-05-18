import { Film } from './film';

export interface Films {
  total: number;
  totalPages: number;
  items: Film[];
}
