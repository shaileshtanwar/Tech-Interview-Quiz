import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { QuestionVM } from 'src/app/quiz/questions/question/question.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public baseURL = 'assets/java.json';
  constructor(private http: HttpClient) {
  }
  public getQuestionData(): Observable<QuestionVM[]> {
    return this.http.get<QuestionVM[]>(this.baseURL);
  }
}
