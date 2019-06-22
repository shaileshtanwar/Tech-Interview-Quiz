import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private quizService: QuizService, private formBuilder: FormBuilder, private router: Router) { }

  public questions: QuestionVM[];
  public questionIndex: number = 0;
  public totalQuestion: number = 5;
  public optionFormGroup: FormGroup;
  @Output() valueChange = new EventEmitter();
  @Input() topic: string;
  ngOnInit() {
    this.quizService.getQuestionData(this.topic).subscribe((questionsData: QuestionVM[]) => {
      this.questions = [];
      this.quizService.totalQuestion = this.totalQuestion;
      for(let i=0;i<this.totalQuestion;i++){
        this.questions.push(questionsData[this.getRandomQuestion(questionsData.length-1)]);
      }
      this.quizService.questions = this.questions;
      this.quizService.buildOptionForm();
      this.optionFormGroup = this.quizService.optionFormGroup;
    });
  }
  public submitQuiz(): void {
    this.quizService.optionFormGroup = this.optionFormGroup;
    this.router.navigate(['/review']);
  }

  public nextQuestion(): void {
    this.questionIndex++;
    this.progressBarValueChanged();
  }

  public progressBarValueChanged(): void {
    this.valueChange.emit("changed");
  }

  public getRandomQuestion(max: number) : number {
    return Math.floor(Math.random() * (max - 0 + 1));
  }
}

export interface QuestionVM {
  question: string;
  answer: string;
  options: string[];
}
