import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { Component, OnInit } from '@angular/core';
import { AsignaturaServiceService } from 'src/app/services/asignatura-service.service';
import { AsignaturaInterfaz } from '../../utils/AsignaturaInterfaz';

@Component({
  selector: 'app-detalleciclo',
  templateUrl: './detalleciclo.component.html',
  styleUrls: ['./detalleciclo.component.css']
})
export class DetallecicloComponent implements OnInit {

  asignatura:AsignaturaInterfaz[]=[];
  ciclo:CiclosInterfaz[]=[];
  imagen:string="";
  constructor(public data:AsignaturaServiceService) {

  }

  ngOnInit(): void {
    this.ciclo=this.data.getInterfazCiclos();
    this.asignatura=this.data.detalleFiltrado;
    this.asignatura.forEach(element => {
      this.ciclo.forEach(e=>{
        if(element.ciclo=="DAM | DAW"){
          this.imagen=e.imagen;
          console.log(this.imagen);
          
        }
      });
    });
    console.log(this.asignatura);
    console.log(this.ciclo);
    
  }

  metodoImagen(){
    
  }


}
