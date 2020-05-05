import { SelectionComponent } from './components/selection/selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProcessComponent } from './components/process/process.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ViewallagentsComponent } from './components/viewallagents/viewallagents.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'process',  component:SelectionComponent},
  {path: 'evaluation', component:EvaluationComponent},
  {path: 'viewallagents', component: ViewallagentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
