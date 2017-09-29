import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import {Response } from '@angular/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerform') registerform: NgForm;
  registerSubscription: Subscription = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  OnSubmit() {
    if (this.registerform.value.email == "" || this.registerform.value.username == ""
      || this.registerform.value.password == "" || this.registerform.value.confirmpassword == "") {
      alert("required")
      return;
    }

    if (this.registerform.value.password == this.registerform.value.confirmpassword) {
      this.registerSubscription = this.authService.Register(
        {
          username: this.registerform.value.username,
          email: this.registerform.value.email,
          password: this.registerform.value.password,
          confirmpassword: this.registerform.value.confirmpassword
        }
      ).subscribe((data: Response) => {
        console.log(data);
        if (data.status === 200) {
          alert("Register successful");
        }
      },
        (err: Error) => {
          console.log(err);
          alert(err.message);
        });
    } else {
      alert('password did not matched');
    }
  }
}
