import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSQuestion } from './model.jsquestion';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  JSURL: string = '../assets/javascript-questions.json'; //json file path
  jsJsonServerURL = 'http://localhost:3000/question'; //json-server url
  constructor(private http: HttpClient) {}

  //Get request to json file path.
  grabJavaScriptQuestions(): Observable<JSQuestion[]> {
    return this.http.get<JSQuestion[]>(this.JSURL);
  }

  //Get request to json server
  grabDataUsingJsonServer(): Observable<JSQuestion[]> {
    return this.http.get<JSQuestion[]>(this.jsJsonServerURL);
  }
}
