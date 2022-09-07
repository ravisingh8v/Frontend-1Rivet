import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("MyApp - Link Page");
  }


  ngOnInit(): void {
  }

}
