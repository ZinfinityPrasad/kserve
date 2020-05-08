import { AuthGuard } from './guard/auth.guard';
import { SelectionComponent } from './components/selection/selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProcessComponent } from './components/process/process.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ViewallagentsComponent } from './components/viewallagents/viewallagents.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'process',  component:SelectionComponent, canActivate:[AuthGuard]},
  {path: 'eval', component:EvaluationComponent, canActivate:[AuthGuard]},
  {path: 'agents', component: ViewallagentsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
