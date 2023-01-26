import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormacionComponent,
    NavbarComponent,
    PortadaComponent,
    ProyectosComponent,
    SobremiComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
