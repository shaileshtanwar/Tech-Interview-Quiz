import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ReviewComponent } from 'src/app/quiz/review/review.component';
import { ResultComponent } from 'src/app/quiz/result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
