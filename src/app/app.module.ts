import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './my-components/todos/todos.component';
import { TodoListsComponent } from './my-components/todo-lists/todo-lists.component';
import { HomeComponent } from './my-components/home/home.component';
import { MatchesComponent } from './my-components/matches/matches.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListsComponent,
    HomeComponent,
    MatchesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
