import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { PipeUnoPipe } from './pipes/pipe-uno.pipe';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    NavbarComponent,
    PipeUnoPipe,
    AsignaturasComponent,
    DetallecicloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
