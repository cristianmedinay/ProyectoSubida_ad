import { Component, OnInit } from '@angular/core';
import {AsignaturaInterfaz} from '../../utils/AsignaturaInterfaz';
import { AsignaturaServiceService } from '../../services/asignatura-service.service';
@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  contador :number = this.filtrame.getFitlradoDefecto().length;
  nombreSelect:string="";
  cicloSelect:string="";
  conocimientoeSelect:string="";
  filtro:number=0;
  filtrado:AsignaturaInterfaz[]=[];
  constructor(public filtrame:AsignaturaServiceService) { }

  ngOnInit(): void {
    this.filtrado = this.filtrame.getFitlradoDefecto();
    //console.log(this.filtrado);

    
  }

  pasarDato(parametro:string){
    console.log(parametro);
  }


  /*
  comparar(nombreSelect:string){
    this.AsignaturaObjeto.forEach(elemento => {
      if(elemento.ciclo==nombreSelect){
        this.filtro=[elemento.nombre];
      }
    });
  }*/

  /*comparar(nombreSelect:string,cicloSelect:string){
    this.filtrado= this.filtrame.filtradodeTres(nombreSelect,cicloSelect);
    this.filtrame.setFiltro(this.filtrado);
    console.log(this.filtrame.setFiltro(this.filtrado));
    //return nombreSelect;
  }*/
  
  
  //comparar(nombreSelect:string,cicloSelect:string,conocimientoeSelect:string
  comparar(nombreSelect:string,cicloSelect:string,conocimientoeSelect:string){
    this.filtrado= this.filtrame.filtradodeTres(nombreSelect,cicloSelect,conocimientoeSelect);
    console.log(this.filtro);
    this.contador = this.filtrado.length;
    //this.filtrame.setFiltro(this.filtrado);
    //return nombreSelect;
  }

}
