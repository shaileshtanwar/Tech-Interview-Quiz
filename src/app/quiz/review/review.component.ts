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
    for (let i = 0; i < this.totalQuestion; i++) {
      if (this.questions[i].answer == 'A' && (<FormArray>this.optionFormGroup.get('optionsArray')).controls[i].get('op1').value) {
        this.quizService.correctQues++;
      } else if (this.questions[i].answer == 'B' && (<FormArray>this.optionFormGroup.get('optionsArray')).controls[i].get('op2').value) {
        this.quizService.correctQues++;
      } else if (this.questions[i].answer == 'C' && (<FormArray>this.optionFormGroup.get('optionsArray')).controls[i].get('op3').value) {
        this.quizService.correctQues++;
      } else if (this.questions[i].answer == 'D' && (<FormArray>this.optionFormGroup.get('optionsArray')).controls[i].get('op4').value) {
        this.quizService.correctQues++;
      } else {
        this.quizService.incorrectQues++;
      }
    }
    this.router.navigate(['/result']);
  }
}
