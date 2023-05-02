import { ReactNode } from "react";

export interface ICardBox {
  src: ReactNode;
  title: string;
  body: string;
}


export interface Itestimonies {
  title: string ; 
  body : string ; 
  src ?: string 
}

export interface ITestimoniesData  {
  title: string ;
  body: string ; 
  src: string 
}