import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
