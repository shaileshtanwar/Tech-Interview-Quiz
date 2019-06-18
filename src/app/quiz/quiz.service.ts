import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { QuestionVM } from 'src/app/quiz/questions/question.component';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public javaURL = 'assets/java.json';
  public angularURL = 'assets/angular.json';
  public optionFormGroup: FormGroup;
  public totalQuestion: number = 3;
  public questions: QuestionVM[] = [];
  public correctQues: number = 0;
  public incorrectQues: number = 0;
  public score: number = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  createOptions(): FormGroup {
    return this.formBuilder.group({
      op1: false,
      op2: false,
      op3: false,
      op4: false
    });
  }

  public getQuestionData(topic: string): Observable<QuestionVM[]> {
    if (topic == 'Angular') {
      return this.http.get<QuestionVM[]>(this.angularURL);
    } else if (topic == 'Java') {
      return this.http.get<QuestionVM[]>(this.javaURL);
    }
  }

  public buildOptionForm() {
    this.optionFormGroup = this.formBuilder.group({
      optionsArray: this.formBuilder.array([])
    });
    for (var i = 0; i < this.totalQuestion; i++) {
      (<FormArray>this.optionFormGroup.get('optionsArray')).push(this.createOptions());
    }
  }
}
