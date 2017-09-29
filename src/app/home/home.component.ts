import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  txt="";
  constructor(private session:SessionService, private user:UserService) { }

  ngOnInit() {
this.txt="{email:'email@.com',password:'password',isLoggedIn:true}";
  }
  SaveCookie(){
    this.session.Set(environment.CookieKey,this.txt);
  }
  ShowCookie(){
    console.log(this.session.Get(environment.CookieKey));
    this.txt = this.session.Get(environment.CookieKey);
  }
  onRefreshDetail_Clicked(){
    this.user.Get(1).subscribe((data)=>{
      //console.log(data);
      data.isLoggedIn = true;
      //console.log(data)
      this.txt = JSON.stringify(data);
      // this.txt.innerHTML = JSON.stringify(data);
      //this.txt.innerText = data;
    });
  }
  onDeleteCookies_Clicked(){
    this.session.Delete(environment.CookieKey);
  }
  onLogout_Clicked(){
    var cookie = JSON.parse(this.session.Get(environment.CookieKey));
    cookie.isLoggedIn = false;
    this.session.Set(environment.CookieKey,JSON.stringify(cookie));
  }
}
