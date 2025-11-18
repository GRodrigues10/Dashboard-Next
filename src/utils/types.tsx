export interface SalesTypes {
  id: number;
  date: string;
  user?:string,
  product: string;
  price: number;
  rate: number;
  month:string
  category: any;
  sold:number
}

export interface ExpensesTypes {
  id: number;
  description: string;
  value: number;
  date: string;
  category: string;
}
