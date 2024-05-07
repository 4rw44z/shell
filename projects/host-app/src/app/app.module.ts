import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    HomeComponent,
    TodoComponent,
    AppRoutingModule
  ]
})
export class AppModule { }
