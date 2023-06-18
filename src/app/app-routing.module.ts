import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './my-components/todos/todos.component';
import { HomeComponent } from './my-components/home/home.component';
import { TodoListsComponent } from './my-components/todo-lists/todo-lists.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'todo',
    component: TodosComponent
  },
  {
    path: 'todo_list',
    component: TodoListsComponent
  },
  {
    path: 'product',
    loadChildren: ()=> import('./my-components/product/product.module').then(res=>res.ProductModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
