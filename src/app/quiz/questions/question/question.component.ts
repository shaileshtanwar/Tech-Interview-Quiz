import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/quiz/questions/question/question.service';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }
  public questions: QuestionVM[];
  public questionIndex: number = 0;
  public totalQuestion: number = 3;
  public options: FormGroup;
  @Input() topic: string;
  ngOnInit() {
    this.questionService.getQuestionData(this.topic).subscribe((questionsData: QuestionVM[]) => {
      this.questions = questionsData;
      console.log(this.questions);
    });
    this.options = new FormGroup({
      op1: new FormControl(),
      op2: new FormControl(),
      op3: new FormControl(),
      op4: new FormControl()
    })
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
