import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleFederationComponent } from './module-federation.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModuleFederationComponent
      }
    ])
  ]
})
export class ModuleFederationModule { }
