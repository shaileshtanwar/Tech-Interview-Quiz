import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  levels: Levels[] = [
    {value: '1', viewValue: 'Easy'},
    {value: '2', viewValue: 'Beginner'},
    {value: '3', viewValue: 'Intermediate'},
    {value: 'w', viewValue: 'Expert'}
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      difficultyLevel: ['', Validators.required]
    });
  }

}

export interface Levels {
  value: string;
  viewValue: string;
}
