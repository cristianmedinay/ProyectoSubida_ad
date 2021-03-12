import { NuevoAsigna } from './../../utils/AsignaturaInterfaz';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { Component, OnInit } from '@angular/core';
import { AsignaturaInterfaz } from '../../utils/AsignaturaInterfaz';
import { AsignaturaServiceService } from '../../services/asignatura-service.service';
@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})



export class CiclosComponent implements OnInit {

  //ObjetoNuevo: NuevoAsigna[]=[{nuevo:''}];

  pintarAsignatura:AsignaturaInterfaz[]=[];
  pintarCiclo:CiclosInterfaz[]=[];
  curso:string="";
  constructor(public asignatura:AsignaturaServiceService,public ciclo:AsignaturaServiceService, public data:AsignaturaServiceService) {

  }
  
  ngOnInit(): void {
    this.pintarAsignatura = this.asignatura.getInterfaz();
    this.pintarCiclo = this.ciclo.getInterfazCiclos();
  } 

  pasarDatosDam(curso:number){
   this.pintarAsignatura= this.asignatura.getFiltraloDam(curso);
   this.asignatura.setDetalle(this.pintarAsignatura);
  
  }

  pasarDatosDaw(curso:number){
   this.pintarAsignatura= this.asignatura.getFiltraloDaw(curso);
   this.asignatura.setDetalle(this.pintarAsignatura);
  }
  /*comparar(){

    this.AsignaturaObjeto.forEach(elemento => {
      if(elemento.ciclo=='DAM' || elemento.ciclo=='DAM | DAW'){
        this.ObjetoNuevo.forEach(element => {
          element.nuevo=elemento.nombre;
          
        });
      }
    });
  }*/



}
