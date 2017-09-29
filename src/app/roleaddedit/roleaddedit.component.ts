import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roleaddedit',
  templateUrl: './roleaddedit.component.html',
  styleUrls: ['./roleaddedit.component.css']
})
export class RoleaddeditComponent implements OnInit {
  PageHeader="";
  constructor(private route: ActivatedRoute) {
    this.PageHeader = this.route.snapshot.url[this.route.snapshot.url.length-1].toString();
   }

  ngOnInit() {
  }

}
