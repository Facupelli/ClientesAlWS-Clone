export interface ExcelProduct {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  marca: string;
  precio: number;
  variedades: string;
  variedades2: string;
}

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  marca: string;
  precio: number;
  variedades: string[];
  variedades2: string[];
}
