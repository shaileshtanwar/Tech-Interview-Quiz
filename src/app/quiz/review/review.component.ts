import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/quiz/quiz.service';
import { QuestionVM } from 'src/app/quiz/questions/question.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private quizService: QuizService, private formBuilder: FormBuilder, private router: Router) { }

  public questions: QuestionVM[];
  public questionIndex: number = 0;
  public totalQuestion: number = 3;
  public optionFormGroup: FormGroup;
  @Input() topic: string;
  ngOnInit() {
    this.questions = this.quizService.questions;
    this.optionFormGroup = this.quizService.optionFormGroup;
    this.totalQuestion = this.quizService.totalQuestion;
  }
  public submitQuiz(): void {
    this.router.navigate(['/result']);
  }
}
