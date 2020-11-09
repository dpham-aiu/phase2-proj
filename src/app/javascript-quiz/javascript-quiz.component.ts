import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JSQuestion, Answers } from '../model.jsquestion';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-javascript-quiz',
  templateUrl: './javascript-quiz.component.html',
  styleUrls: ['./javascript-quiz.component.css'],
})
export class JavascriptQuizComponent implements OnInit {
  loaded: boolean = false; //used to display elements when page is fully loaded.
  currentQuestion: JSQuestion; //used to keep track of current question
  userAnswers: string[] = []; //used to hold values of user answers.
  jsQuestionList: JSQuestion[]; //tuple of questions from json data
  submitted: boolean = false; //checks to see if form was submitted.
  index: number = 0; //index to keep track of current question
  percentageCorrect: any; //percent of user's correct answers.
  popUpMsg: string;
  onTime: boolean = true;
  /**
   * Formgroup that hands user quiz form.
   */
  questionForm = new FormGroup({
    quizAnswer: new FormControl(),
  });

  /**
   * Timer attribute
   */
  counter: { min: number; sec: number };

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    //Grabbing questions for json file.
    this.grapQuestions();
    this.startTimer();
  }

  /**
   * Function that handles the timer functionality.
   */
  startTimer() {
    this.counter = { min: 5, sec: 0 };
    let intervalId = setInterval(() => {
      if (this.onTime == false) {
        clearInterval(intervalId);
      }
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59;
      } else this.counter.sec -= 1;
      if (this.counter.min === 0 && this.counter.sec == 0) {
        clearInterval(intervalId);
        this.onTime = false;
        this.submitted = true;
        if (this.userAnswers.length == 0) {
          this.percentageCorrect = '0';
          this.popUpMsg = 'You did not answer any questions.';
        }
      }
    }, 1000);
  }

  //Grabs data from quiz service and sets data in jsQuestionList tuple.
  grapQuestions() {
    this.quizService.grabJavaScriptQuestions().subscribe(
      (data) => {
        this.jsQuestionList = data;
      },
      (error) => {
        console.error('there was an error retrieving from json file', error);
      },
      () => {
        this.currentQuestion = this.jsQuestionList[this.index];
        this.index++;
        this.loaded = true;
      }
    );
  }

  /**
   * Checks to see if user has selected an answer
   * if yes, moves on to next question
   * else returns an alert.
   */
  nextQuestion() {
    var radio = document.getElementsByTagName('input');
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].type == 'radio' && radio[i].checked && this.index <= 4) {
        this.userAnswers.push(radio[i].value);
        this.currentQuestion = this.jsQuestionList[this.index];
        this.index++;
        radio[i].checked = false;
        return;
      }
    }
    return alert('Please select an answer');
  }

  /**
   * This function counts the number of correct answers in userAnswers tuple.
   * returns a percentage version of the amount of correct answers.
   */
  calculateCorrectAnswers(): number {
    var total: number = 0;
    for (var i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] == 'correct') {
        total++;
      }
    }
    return (total / this.jsQuestionList.length) * 100;
  }

  /**
   * When the submit button is clicked it sets percentageCorrect to the calculated results
   * sets submitted = to true which hides the quiz UI
   */
  submitAnswers() {
    var radio = document.getElementsByTagName('input');
    this.onTime = false;
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].type == 'radio' && radio[i].checked) {
        this.userAnswers.push(radio[i].value);
        this.currentQuestion = this.jsQuestionList[this.index];
      }
    }
    this.percentageCorrect = this.calculateCorrectAnswers();
    this.submitted = true;
    if (this.percentageCorrect >= 80) {
      this.popUpMsg = 'You have pass the quiz and will be reached by our team!';
    } else {
      this.popUpMsg =
        'You have failed the quiz. Please press the restart to retake the quiz.';
    }
  }

  /**
   * This reloads the window so that users can try again.
   */
  restartTest() {
    location.reload();
  }
}
