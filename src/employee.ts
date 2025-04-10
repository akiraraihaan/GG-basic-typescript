export interface Employee {
  id: string;
  name: string;
  div: string;
}

export interface Manager extends Employee {
  numberOfEmployees: number;
}