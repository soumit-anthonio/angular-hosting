import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate  } from '@angular/router';
import { TodosComponent } from './my-components/todos/todos.component';
import { HomeComponent } from './my-components/home/home.component';
import { TodoListsComponent } from './my-components/todo-lists/todo-lists.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { 
  AuthGuardService as AuthGuard 
} from './shared/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'todo',
    component: TodosComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'todo_list',
    component: TodoListsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'product',
    loadChildren: ()=> import('./my-components/product/product.module').then(res=>res.ProductModule),
    canActivate: [AuthGuard] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
