export interface SalesTypes {
  id: number;
  date: string;
  product: string;
  price: number;
  rate: number;
  category: string;
  sold:number
}

export interface ExpensesTypes {
  id: number;
  description: string;
  value: number;
  date: string;
  category: string;
}
