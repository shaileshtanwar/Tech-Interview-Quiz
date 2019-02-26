import { Component, OnInit,Input } from '@angular/core';
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
  public totalQuestion: number = 3;
  public optionFormGroup: FormGroup;
  @Input() topic: string;
  ngOnInit() {
    this.quizService.getQuestionData(this.topic).subscribe((questionsData: QuestionVM[]) => {
      this.questions = questionsData;
      this.totalQuestion = questionsData.length;
      this.quizService.totalQuestion = this.totalQuestion;
      this.quizService.questions = questionsData;
      // console.log(this.questions);
      this.quizService.buildOptionForm();
    this.optionFormGroup = this.quizService.optionFormGroup;
    });
  }
  public submitQuiz(): void {
    console.log(JSON.stringify(this.optionFormGroup.value));
    this.quizService.optionFormGroup = this.optionFormGroup;
    console.log(JSON.stringify(this.quizService.optionFormGroup.value));
    this.router.navigate(['/review']);
  }

  public nextQuestion(): void {
    this.questionIndex++;
  }

}

export interface QuestionVM {
  question: string;
  answer: string;
  options: string[];
}
