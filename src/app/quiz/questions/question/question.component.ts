import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/quiz/questions/question/question.service';
import { Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService, private formBuilder: FormBuilder) { }
  public questions: QuestionVM[];
  public questionIndex: number = 0;
  public totalQuestion: number = 3;
  public optionFormGroup: FormGroup;
  @Input() topic: string;
  ngOnInit() {
    this.questionService.getQuestionData(this.topic).subscribe((questionsData: QuestionVM[]) => {
      this.questions = questionsData;
      console.log(this.questions);
    });
    this.optionFormGroup = this.formBuilder.group({
      optionsArray: this.formBuilder.array([])
    });
    for (var i = 0; i < this.totalQuestion; i++) {
      (<FormArray>this.optionFormGroup.get('optionsArray')).push(this.createOptions());
    }
  }

  createOptions(): FormGroup {
    return this.formBuilder.group({
      op1: false,
      op2: false,
      op3: false,
      op4: false
    });
  }

  public nextQuestion() {
    this.questionIndex++;
  }

}

export interface QuestionVM {
  question: string;
  answer: string;
  options: string[];
}
