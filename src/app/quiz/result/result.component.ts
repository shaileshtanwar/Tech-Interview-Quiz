import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';
import { FormArray, FormGroup } from '@angular/forms';
import { QuestionVM } from 'src/app/quiz/questions/question.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  public correctQues: number = 0;
  public incorrectQues: number = 0;
  public score: number = 0;
  public questions: QuestionVM[];
  public questionIndex: number = 0;
  public totalQuestion: number = 3;
  public optionFormGroup: FormGroup;
  ngOnInit() {
    this.quizService.score = 0;
    this.quizService.incorrectQues = 0;
    this.quizService.correctQues = 0;
    this.calculateResult(this.quizService.optionFormGroup);
    this.questions = this.quizService.questions;
    this.optionFormGroup = this.quizService.optionFormGroup;
    this.totalQuestion = this.quizService.totalQuestion;
  }

  public calculateResult(fromGroup: FormGroup): void {
    let index = 0;
    for (let control of (<FormArray>fromGroup.get('optionsArray')).controls) {
      if (this.quizService.questions[index].answer === 'A') {
        this.quizService.correctQues = !!control.get('op1').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !control.get('op1').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'B') {
        this.quizService.correctQues = !!control.get('op2').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !control.get('op2').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'C') {
        this.quizService.correctQues = !!control.get('op3').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !control.get('op3').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'D') {
        this.quizService.correctQues = !!control.get('op4').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !control.get('op4').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      }
      index++;
    }
    this.quizService.score = 4 * (this.quizService.correctQues) - 2 * (this.quizService.incorrectQues);
    this.score = this.quizService.score;
    this.correctQues = this.quizService.correctQues;
    this.incorrectQues = this.quizService.incorrectQues;
  }

}
