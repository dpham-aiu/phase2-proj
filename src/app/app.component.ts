import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JavascriptQuizComponent } from './javascript-quiz/javascript-quiz.component';

export interface INavLink {
  id: number;
  pathLink: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  startHit: boolean = false;
  selectedNavLink: INavLink;
  navLinks: Array<INavLink> = [
    { pathLink: 'javascript-quiz', label: 'JavaScript', id: 1 },
    { pathLink: 'html5-quiz', label: 'HTML5', id: 2 },
  ];

  constructor(private router: Router) {}

  routeToLink = (path) => {
    console.log(path);
    this.router.navigate([path]);
  };

  startQuiz(): void {
    this.startHit = true;
    this.router.navigate(['javascript-quiz']);
  }
}
