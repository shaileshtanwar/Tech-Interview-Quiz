import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
