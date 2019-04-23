import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {
    path: 'teste',
    component: TesteComponent,
    data: { title: 'Teste' }
  },
  { path: '',
    redirectTo: '/teste',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
