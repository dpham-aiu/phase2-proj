import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5QuizComponent } from './html5-quiz.component';

describe('Html5QuizComponent', () => {
  let component: Html5QuizComponent;
  let fixture: ComponentFixture<Html5QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5QuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
