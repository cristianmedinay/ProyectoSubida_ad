import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';

const routes: Routes = [
  {path :'',pathMatch:'full',redirectTo:"home"},
  {path :'home',component:HomeComponent},
  {path :'ciclos',component:CiclosComponent},
  {path :'asignaturas',component:AsignaturasComponent},
  {path :'detalleciclo',component:DetallecicloComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //en caso de error 404
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
