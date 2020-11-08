import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Html5QuizComponent } from './html5-quiz/html5-quiz.component';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';

const routes: Routes = [
  { path: 'javascript-quiz', component: JavascriptQuizComponent },
  { path: 'html5-quiz', component: Html5QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
