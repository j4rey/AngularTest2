import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-permissionedit',
  templateUrl: './permissionedit.component.html',
  styleUrls: ['./permissionedit.component.css']
})
export class PermissioneditComponent implements OnInit {
  PageHeader = "";
  constructor(private route: ActivatedRoute) {
    this.PageHeader = this.route.snapshot.url[this.route.snapshot.url.length - 1].toString();
  }

  ngOnInit() {
  }

}
