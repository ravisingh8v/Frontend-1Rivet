import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss']
})
export class DirComponent implements OnInit {
  toggle:boolean
  constructor() {
    this.toggle=true
   }

  ngOnInit(): void {
  }

}
