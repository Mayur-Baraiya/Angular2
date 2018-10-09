import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidation } from './Customvalidation';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  strongRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  @Input() hide = false;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  authorize() {

    if (this.strongRegex.test(this.password.value))
      this.router.navigate(['/listview'])
    else {
      this.hide = true
      setTimeout(() => {
      this.hide = false
      }, 2000)
    }

  }

}

