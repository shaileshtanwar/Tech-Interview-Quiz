import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { QuestionVM } from 'src/app/quiz/questions/question/question.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public javaURL = 'assets/java.json';
  public angularURL = 'assets/angular.json';
  constructor(private http: HttpClient) {
  }
  public getQuestionData(topic: string): Observable<QuestionVM[]> {
    if (topic == 'Angular') {
      return this.http.get<QuestionVM[]>(this.angularURL);
    } else if (topic == 'Java') {
      return this.http.get<QuestionVM[]>(this.javaURL);
    }
  }
}
