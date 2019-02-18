import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TileService } from 'src/app/tile/tile.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  // isLinear = true;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // levels: Levels[] = [
  //   { value: '1', viewValue: 'Easy' },
  //   { value: '2', viewValue: 'Beginner' },
  //   { value: '3', viewValue: 'Intermediate' },
  //   { value: 'w', viewValue: 'Expert' }
  // ];
  public quizTopic: string = undefined;
  constructor(private _formBuilder: FormBuilder, private tileservice: TileService) { }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstNameCtrl: ['', Validators.required],
    //   lastNameCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   difficultyLevel: ['', Validators.required]
    // });
    this.quizTopic = this.tileservice.quiztopic;
  }

}

export interface Levels {
  value: string;
  viewValue: string;
}
