import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListainformesComponent } from './listainformes/listainformes.component';
import { InformeComponent } from './informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListainformesComponent,
    InformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
