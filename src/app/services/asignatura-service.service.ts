import { Injectable } from '@angular/core';
import { AsignaturaInterfaz } from '../utils/AsignaturaInterfaz';
import { CiclosInterfaz } from '../utils/CiclosInterfaz';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaServiceService {

  filtrado:string="";
  detalleCicloFiltrado: CiclosInterfaz[]=[];
  Filtrado: AsignaturaInterfaz[]=[];
  detalleFiltrado: AsignaturaInterfaz[]=[];
  asignatura: AsignaturaInterfaz[]=
  [
    {
      nombre: 'Sistemas informáticos',
      profesor: 'Isaac Sampedro',
      conocimientos: [
        { nombre: 'powershell', imagen: './assets/images/powershell.png' },
        { nombre: 'windows', imagen: './assets/images/win.png' },
        { nombre: 'linux', imagen: './assets/images/linux.png' },
        { nombre: 'virtualizacion', imagen: './assets/images/virtual.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Programación',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: './assets/images/java.png' },
        { nombre: 'mysql', imagen: './assets/images/mysql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Bases de datos',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'mysql', imagen: './assets/images/mysql.png' },
        { nombre: 'sqlserver', imagen: './assets/images/sql.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Lenguajes de Marcas',
      profesor: 'Javier Martinez',
      conocimientos: [
        { nombre: 'html', imagen: './assets/images/xml.jpg' },
        { nombre: 'xml', imagen: './assets/images/html.jpeg' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Entornos de desarrollo',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'powershell', imagen: './assets/images/powershell.png' },
        { nombre: 'scrum', imagen: './assets/images/scrum.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 1,
    },
    {
      nombre: 'Empresa e Iniciativa emprendedora',
      profesor: 'Marta Jimenez',
      conocimientos: [
        { nombre: 'emprender', imagen: './assets/images/empresa.png' },
      ],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Inglés',
      profesor: 'Rocio',
      conocimientos: [{ nombre: 'ingles', imagen: './assets/images/ingles.jpg' }],
      ciclo: 'DAM | DAW',
      curso: 2,
    },
    {
      nombre: 'Programación Multimedia y Dispositivos Moviles',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: './assets/images/java.png' },
        { nombre: 'xml', imagen: './assets/images/xml.jpg' },
        { nombre: 'json', imagen: './assets/images/json.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de interfaces',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'java', imagen: './assets/images/java.png' },
        { nombre: 'javafx', imagen: './assets/images/javafx.jpg' },
        { nombre: 'json', imagen: './assets/images/json.png' },
        { nombre: 'js', imagen: './assets/images/js.jpg' },
        { nombre: 'angular', imagen: './assets/images/angular.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Acceso a Datos',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'java', imagen: './assets/images/java.png' },
        { nombre: 'mysql', imagen: './assets/images/mysql.png' },
        { nombre: 'mongo', imagen: './assets/images/mongo.jpg' },
        { nombre: 'php', imagen: './assets/images/php.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Programacion de servicios y procesos',
      profesor: 'Jesús Niño',
      conocimientos: [
        { nombre: 'seguridad', imagen: './assets/images/seguridad.jpg' },
        { nombre: 'powershell', imagen: './assets/images/powershell.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Sistemas de gestión empresarial',
      profesor: 'Hector Alonso',
      conocimientos: [
        { nombre: 'erp', imagen: './assets/images/erp.jpg' },
        { nombre: 'odoo', imagen: './assets/images/odoo.png' },
      ],
      ciclo: 'DAM',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
      profesor: 'Borja Martín',
      conocimientos: [
        { nombre: 'js', imagen: './assets/images/js.jpg' },
        { nombre: 'react', imagen: './assets/images/react.png' },
        { nombre: 'webpack', imagen: './assets/images/webpack.jpg' },
        { nombre: 'node', imagen: './assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
      profesor: 'David Ventura',
      conocimientos: [
        { nombre: 'php', imagen: './assets/images/php.png' },
        { nombre: 'node', imagen: './assets/images/node.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Despliegue de Aplicaciones',
      profesor: 'Jesus Nuño',
      conocimientos: [
        { nombre: 'apache', imagen: './assets/images/apache.jpeg' },
        { nombre: 'tomcat', imagen: './assets/images/tomcat.png' },
        { nombre: 'powershell', imagen: './assets/images/powershell.png' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
    {
      nombre: 'Desarrollo de Interfaces Web',
      profesor: 'Victor Martín',
      conocimientos: [
        { nombre: 'xml', imagen: './assets/images/xml.jpg' },
        { nombre: 'bootstrap', imagen: './assets/images/boots.png' },
        { nombre: 'diseño', imagen: './assets/images/disenio.jpg' },
      ],
      ciclo: 'DAW',
      curso: 2,
    },
  ]

  ciclo:CiclosInterfaz[]=[
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ];

  constructor() {

   }

   getFitlradoDefecto():AsignaturaInterfaz[]{
    return this.asignatura;
   }

   getFiltro():AsignaturaInterfaz[]{
    return this.Filtrado;
   }
   setFiltro(Filtrado:AsignaturaInterfaz[]){
    return this.Filtrado=Filtrado;
   }

   getDetalle():AsignaturaInterfaz[]{
    return this.detalleFiltrado;
   }
   setDetalle(deatalleFiltrado:AsignaturaInterfaz[]){
    return this.detalleFiltrado=deatalleFiltrado;
   }

   getInterfaz():AsignaturaInterfaz[]{
    return this.asignatura;
   }

   getInterfazCiclos():CiclosInterfaz[]{
    return this.ciclo;
   }
   setInterfazCiclos(ciclo:CiclosInterfaz[]){
    return this.ciclo=ciclo;
   }

   getFiltraloDam(filtra:number){
    //this.setNoticiasAuthor(this.noticias);
    return this.asignatura.filter(e=> {
      return e.curso==filtra && e.ciclo!='DAW';
      //if(e.urlToImage.includes(filtra)){
         //return this.notifiltrada.push(e.urlToImage);
      //};

    });
  }
  getFiltraloDaw(filtra:number){
    //this.setNoticiasAuthor(this.noticias);
    return this.asignatura.filter(e=> {
      return e.curso==filtra && e.ciclo!='DAM';
      //if(e.urlToImage.includes(filtra)){
         //return this.notifiltrada.push(e.urlToImage);
      //};

    });
  }

  filtradodeTres(c1:string,c2:string,c3:string){
    
   return this.asignatura.filter(el=>{
    //let single
      //console.log(el,index,arr);
        //return el=> el.id==0;
        let nombre = el.nombre;
        let ciclo=el.ciclo;
        let filtrado=el.conocimientos.find(el =>{
            return el.nombre.toLocaleLowerCase().includes(c3.toLocaleLowerCase());
        });
        //filtrado?.nombre.toLocaleLowerCase().includes(c3.toLocaleLowerCase())
        return  nombre.toLocaleLowerCase().includes(c1.toLocaleLowerCase()) && ciclo.toLocaleLowerCase().includes(c2.toLocaleLowerCase()) && filtrado;
        //return nombre.toLocaleLowerCase().includes(c1.toLocaleLowerCase());
        
        //; 
        //console.log(nombre,profesor,filtrado);
    });
    //return single;
    }
}
