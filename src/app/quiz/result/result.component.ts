import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.calculateResult(this.quizService.optionFormGroup);
  }

  public calculateResult(fromGroup: FormGroup): void {
    // (<FormArray>fromGroup.get('optionsArray')).forEach(questionFormGroup => {
    //   console.log(questionFormGroup.value);
    // });
    console.log(this.quizService.questions);
    let index = 0;
    for (let control of (<FormArray>fromGroup.get('optionsArray')).controls) {
      console.log(control);
      if (this.quizService.questions[index].answer === 'A') {
        console.log(control.get('op1').value);
        this.quizService.correctQues = !!control.get('op1').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !!control.get('op1').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'B') {
        this.quizService.correctQues = !!control.get('op2').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !!control.get('op2').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'C') {
        this.quizService.correctQues = !!control.get('op3').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !!control.get('op3').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      } else if (this.quizService.questions[index].answer === 'D') {
        this.quizService.correctQues = !!control.get('op4').value ? this.quizService.correctQues + 1 : this.quizService.correctQues;
        this.quizService.incorrectQues = !!control.get('op4').value ? this.quizService.incorrectQues + 1 : this.quizService.incorrectQues;
      }
      index++;
    }
    this.quizService.Score = 4 * (this.quizService.correctQues) - 2 * (this.quizService.incorrectQues);
  }

}
