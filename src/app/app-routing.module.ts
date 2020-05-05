import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProcessComponent } from './components/process/process.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'process',  component:ProcessComponent},
  {path: 'evaluation', component:EvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
