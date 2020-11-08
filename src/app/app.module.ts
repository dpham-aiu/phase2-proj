import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Html5QuizComponent } from './html5-quiz/html5-quiz.component';

@NgModule({
  declarations: [AppComponent, JavascriptQuizComponent, Html5QuizComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
