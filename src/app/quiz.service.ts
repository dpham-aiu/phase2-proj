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
  //Use json-server on C:\Users\danny\OneDrive\Documents\phase2-proj-danny-pham\src\assets\js-questions-jsonserver.json
  grabDataUsingJsonServer(): Observable<JSQuestion[]> {
    return this.http.get<JSQuestion[]>(this.jsJsonServerURL);
  }
}
