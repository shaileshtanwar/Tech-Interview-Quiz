import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TileService } from 'src/app/tile/tile.service';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quizTopic: string = undefined;
  constructor(private quizService: QuizService, private _formBuilder: FormBuilder, private tileservice: TileService) { }
  public progressPoints: number = 0;
  public progressBarValue: number = 0;
  ngOnInit() {
    this.quizTopic = this.tileservice.quiztopic;
    this.progressPoints = 100 / this.quizService.totalQuestion;
  }

  public updateProgressBarValue(event: any): void {
    this.progressBarValue += this.progressPoints;
  }
}

export interface Levels {
  value: string;
  viewValue: string;
}
