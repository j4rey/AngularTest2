import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useraddedit',
  templateUrl: './useraddedit.component.html',
  styleUrls: ['./useraddedit.component.css']
})
export class UseraddeditComponent implements OnInit {

  PageHeader = "";
  constructor(private route:ActivatedRoute) { 
    this.PageHeader = this.route.snapshot.url[this.route.snapshot.url.length-1].toString();
    //this.PageHeader = this.PageHeader.replace(/(\w)(\w*)/g,
    //function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
  }

  ngOnInit() {
  }

}
