import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TileService } from 'src/app/tile/tile.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quizTopic: string = undefined;
  constructor(private _formBuilder: FormBuilder, private tileservice: TileService) { }

  ngOnInit() {
    this.quizTopic = this.tileservice.quiztopic;
  }

}

export interface Levels {
  value: string;
  viewValue: string;
}
