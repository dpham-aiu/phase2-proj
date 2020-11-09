import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';

const routes: Routes = [
  { path: 'javascript-quiz', component: JavascriptQuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
