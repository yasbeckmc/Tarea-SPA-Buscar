import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Heroe[]=[
    {
      origen: "Machala",
      destino: "Destino: Cuenca",
      precio: "$8",
      descripcion: "Machala a Cuenca",
      tipo:"Externo"
    },
    {
      origen: "Machala",
      destino: "Destino: Guayaquil",
      precio: "$8",
      descripcion: "Machala a Guayaquil",
      tipo:"Interno"
    },
    {
      origen: "Guayaquil",
      destino: "Destino: Cuenca",
      precio: "$7",
      descripcion: "Guayaquil a Cuenca",
      tipo:"Externo"
    },
    {
      origen: "Guayaquil",
      destino: "Destino: Machala",
      precio: "$8",
      descripcion: "Guayaquil a Machala",
      tipo:"Interno"
    },
    {
      origen: "Haquillas",
      destino: "Destino: Santa Rosa",
      precio: "$3",
      descripcion: "Huaquillas a Santa Rosa",
      tipo:"Interno"
    },
    {
      origen: "Santa Rosa",
      destino: "Destino: Machala",
      precio: "$1",
      descripcion: "Santa Rosa a Machala",
      tipo:"Interno"
    },
    {
      origen: "Machala",
      destino: "Destino: Huaquillas",
      precio: "$9",
      descripcion: "Machala a Hauquillas",
      tipo:"Interno"
    },
    {
      origen: "Huaquillas",
      destino: "Destino: Machala",
      precio: "$10",
      descripcion: "Huaquillas a Machala",
      tipo:"Interno"
    },
    {
      origen: "Huaquillas",
      destino: "Destino: Guayaquil",
      precio: "$9",
      descripcion: "Huaquillas a Guayaquil",
      tipo:"Interno"
    },
    {
      origen: "Guayaquil",
      destino: "Destino: Santa Rosa",
      precio: "$7",
      descripcion: "Guayaquil a Santa Rosa",
      tipo:"Externo"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar...");

  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx:number):Heroe{
    return this.heroes[idx];
  }

  buscarHeroes(dato:string) : Heroe[] {
    let heroesArr:Heroe[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let origen = heroe.origen.toLocaleLowerCase();
      if(origen.indexOf(dato) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }

}

export interface Heroe{
  origen: string;
  destino: string;
  precio: string;
  descripcion: string;
  tipo: string;
  idx?: number;
}
